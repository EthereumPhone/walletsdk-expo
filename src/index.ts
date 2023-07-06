// Import the native module. On web, it will be resolved to ExpoWalletsdk.web.ts
// and on native platforms to ExpoWalletsdk.ts
import ExpoWalletsdkModule from './ExpoWalletsdkModule';
import {Platform} from "react-native";


const throwIfNotAndroid = () => {
  if (Platform.OS !== 'android') {
    throw new Error('This method is only available on Android.');
  }
};

export function isEthOS(): boolean {
  if (Platform.OS !== 'android') {
    return false;
  }
  return ExpoWalletsdkModule.isEthOS();
}

export interface TransactionParams {
  to: string;
  value: string;
  data: string;
  gasPrice?: string | null;
  gasAmount?: string;
  chainId?: number;
}

export function sendTransaction(params: TransactionParams) {
  throwIfNotAndroid();
  const { to, value, data, gasPrice = null, gasAmount = "21000", chainId = 1 } = params;
  if (chainId !== getChainId()) {
    changeChainId(chainId);
  }
  return ExpoWalletsdkModule.sendTransaction(to, value, data, gasPrice, gasAmount, chainId);
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

export function changeChainId(chainId: number) {
  throwIfNotAndroid();
  return ExpoWalletsdkModule.changeChainId(chainId);
}
