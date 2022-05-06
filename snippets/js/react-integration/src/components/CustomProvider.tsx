import React from 'react';
// $start: js-react-custom-provider
import { createWeb3ApiProvider } from '@web3api/react';

const CustomWeb3ApiProvider = createWeb3ApiProvider('custom');

export const CustomProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <CustomWeb3ApiProvider>
      {children}
    </CustomWeb3ApiProvider>
  );
};
// $end
