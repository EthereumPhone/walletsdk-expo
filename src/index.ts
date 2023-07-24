// Import the native module. On web, it will be resolved to ExpoWalletsdk.web.ts
// and on native platforms to ExpoWalletsdk.ts
import ExpoWalletsdkModule from './ExpoWalletsdkModule';
import {Platform} from "react-native";


const throwIfNotAndroid = () => {
  if (Platform.OS !== 'android') {
    throw new Error('This method is only available on Android.');
  }
};

export function hasSystemWallet(): boolean {
  if (Platform.OS !== 'android') {
    return false;
  }
  return ExpoWalletsdkModule.isEthOS();
}

export interface TransactionParams {
  to: string;
  value: string;
  data?: string | null;
  gasPrice?: string | null;
  gasAmount?: string | null;
  chainId?: number | null;
  chainRPCUrl?: string | null;
}

export function sendTransaction(params: TransactionParams) {
  throwIfNotAndroid();
  const { to, value, data, gasPrice = null, gasAmount, chainId = 1, chainRPCUrl = "https://cloudflare-eth.com" } = params;
  var newData = data;
  var newGasAmount = gasAmount;
  if (newData === undefined) {
    newData = ""
    //newGasAmount = "21000"
  } else if (newGasAmount === undefined) {
    newGasAmount = "0x0"
  }

  if (chainId !== getChainId()) {
    changeChainId(chainId!!, chainRPCUrl!!);
  }
  console.log("Change chain done")
  return ExpoWalletsdkModule.sendTransaction(to, value, newData, gasPrice, gasAmount, chainId, chainRPCUrl);
}

export interface SignMessageParams {
  message: string;
  type?: string;
}

export function signMessage(params: SignMessageParams) {
  throwIfNotAndroid();
  const { message, type = 'personal_sign' } = params;
  return ExpoWalletsdkModule.signMessage(message, type);
}

export function getAddress() {
  throwIfNotAndroid();
  return ExpoWalletsdkModule.getAddress();
}

export function getChainId() {
  throwIfNotAndroid();
  return ExpoWalletsdkModule.getChainId();
}

export function changeChainId(chainId: number, rpcUrl: string) {
  throwIfNotAndroid();
  return ExpoWalletsdkModule.changeChainId(chainId, rpcUrl);
}
