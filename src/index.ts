import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoWalletsdk.web.ts
// and on native platforms to ExpoWalletsdk.ts
import ExpoWalletsdkModule from './ExpoWalletsdkModule';
import ExpoWalletsdkView from './ExpoWalletsdkView';
import { ChangeEventPayload, ExpoWalletsdkViewProps } from './ExpoWalletsdk.types';

// Get the native constant value.
export const PI = ExpoWalletsdkModule.PI;

export function hello(): string {
  return ExpoWalletsdkModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoWalletsdkModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoWalletsdkModule ?? NativeModulesProxy.ExpoWalletsdk);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoWalletsdkView, ExpoWalletsdkViewProps, ChangeEventPayload };
