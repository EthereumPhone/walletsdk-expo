import * as React from 'react';

import { ExpoWalletsdkViewProps } from './ExpoWalletsdk.types';

export default function ExpoWalletsdkView(props: ExpoWalletsdkViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
