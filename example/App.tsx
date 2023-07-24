import { Button, StyleSheet, Text, View } from 'react-native';

import * as ExpoWalletsdk from 'expo-walletsdk';



function signMessage() {
  var signMessageParams: ExpoWalletsdk.SignMessageParams = {
    message: "Hello World"
  }
  var result = ExpoWalletsdk.signMessage(signMessageParams)

  console.log(result)
}

function sendTransaction() {
  var sendTransactionParams: ExpoWalletsdk.TransactionParams = {
    to: "0x83f1AB658d91585d890dD3FFCd070Af693d615f1",
    value: "1",
    chainId: 10,
    chainRPCUrl: "https://rpc.optimism.gateway.fm"
  }
  var result = ExpoWalletsdk.sendTransaction(sendTransactionParams)
  console.log(result)
}

export default function App() {
  return (
    <View style={styles.container}>
      {
        ExpoWalletsdk.hasSystemWallet() ?
          <Text>Running on EthOS</Text> :
          <Text>Not running on EthOS</Text>
      }
      <Button title='Sign Message' onPress={signMessage}></Button>
      <Button title='Send Transaction' onPress={sendTransaction}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
