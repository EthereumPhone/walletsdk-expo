# expo-walletsdk

ethOS WalletSDK for Expo apps.

### Add the package to your npm dependencies

```
npm install expo-walletsdk
```

### How to use it
You want to first check if the device is ethOS before running signMessage or sendTransaction. 

Start by importing all the ethOS WalletSDK functions like this: `import * as ExpoWalletsdk from 'expo-walletsdk';`

Then you can call `ExpoWalletsdk.isEthOS()`, which will return true if the device is running ethOS.

### How to sign a message: 
```ts
var signMessageParams: ExpoWalletsdk.SignMessageParams = {
    message: "Hello World"
}
var result = ExpoWalletsdk.signMessage(signMessageParams)
```

### How to send Transactions:
```ts
var txParams: ExpoWalletsdk.TransactionParams = {
    to: "",
    value: "1000000000000000000", // 1 eth in wei
    data: ""
}
var txId = ExpoWalletsdk.sendTransaction(params)
```

### Support

If you have any comments/questions please feel free to ask them in our discord: https://discord.gg/unqv49a66f
