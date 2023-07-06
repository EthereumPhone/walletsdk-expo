import { Button, StyleSheet, Text, View } from 'react-native';

import * as ExpoWalletsdk from 'expo-walletsdk';



function signMessage() {
  var signMessageParams: ExpoWalletsdk.SignMessageParams = {
    message: "Hello World"
  }
  var result = ExpoWalletsdk.signMessage(signMessageParams)

  console.log(result)
}

export default function App() {
  return (
    <View style={styles.container}>
      {
        ExpoWalletsdk.isEthOS() ?
          <Text>Running on EthOS</Text> :
          <Text>Not running on EthOS</Text>
      }
      <Button title='Sign Message' onPress={signMessage}></Button>
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
