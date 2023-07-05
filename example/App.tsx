import { StyleSheet, Text, View } from 'react-native';

import * as ExpoWalletsdk from 'expo-walletsdk';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoWalletsdk.hello()}</Text>
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
