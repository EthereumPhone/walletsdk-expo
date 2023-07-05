import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoWalletsdkViewProps } from './ExpoWalletsdk.types';

const NativeView: React.ComponentType<ExpoWalletsdkViewProps> =
  requireNativeViewManager('ExpoWalletsdk');

export default function ExpoWalletsdkView(props: ExpoWalletsdkViewProps) {
  return <NativeView {...props} />;
}
