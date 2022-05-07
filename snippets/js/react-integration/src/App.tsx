import { HelloWorld } from './components/HelloWorld';
// $start: js-react-provider
import React from 'react';
import { Web3ApiProvider } from '@web3api/react';

export const App: React.FC = () => {
  return (
    <Web3ApiProvider>
        <HelloWorld />
    </Web3ApiProvider>
  );
};
// $end

export const ProviderWithEmptyRedirects: React.FC = () => {
  return (
// $start: js-react-provider-empty-redirects
<Web3ApiProvider redirects={ [] }/>
// $end
  );
};
