package org.ethosmobile.walletsdk

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.Context
import org.ethosmobile.walletsdk.WalletSDK

class ExpoWalletsdkModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.

  var wallet: WalletSDK? = null

  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoWalletsdk')` in JavaScript.
    Name("ExpoWalletsdk")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("isEthOS") {
      return@Function isEthOS()
    }

    Function("sendTransaction") { to: String, value: String, data: String, gasPrice: String?, gasAmount: String?, chainId: Int, chainRPCUrl: String? ->
      return@Function sendTransaction(to, value, data, gasPrice, gasAmount, chainId, chainRPCUrl)
    }

    Function("signMessage") { message: String, type: String ->
      return@Function signMessage(message, type)
    }

    Function("getAddress") {
      return@Function getAddress()
    }

    Function("changeChainId") { chainId: Int, rpcUrl: String ->
      return@Function changeChainId(chainId, rpcUrl)
    }

    Function("getChainId") {
      return@Function getChainId()
    }
  }

  fun initWalletIfNull() {
    if (wallet == null) {
      wallet = WalletSDK(context)
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  fun isEthOS(): Boolean {
    return context.getSystemService("wallet") != null
  }

  fun sendTransaction(to: String, value: String, data: String, gasPrice: String? = null, gasAmount: String?, chainId: Int = 1, chainRPCUrl: String? = "https://cloudflare-eth.com"): String {
    wallet = WalletSDK(
      context = context, 
      web3RPC= chainRPCUrl ?: "https://cloudflare-eth.com"
    )
    println("chainRPCUrl $chainRPCUrl")
    return (wallet!!.sendTransaction(to, value, data, gasPrice, gasAmount, chainId).get())
  }

  fun signMessage(message: String, type: String = "personal_sign"): String {
    initWalletIfNull()
    return (wallet!!.signMessage(message, type).get())
  }

  fun getAddress(): String {
    initWalletIfNull()
    return (wallet!!.getAddress())
  }

  fun changeChainId(chainId: Int, rpcUrl: String): String {
    wallet = WalletSDK(context, rpcUrl)
    return (wallet!!.changeChainId(chainId).get())
  }

  fun getChainId(): Int {
    initWalletIfNull()
    return (wallet!!.getChainId())
  }
}
