import { HelloWorld } from './components/HelloWorld';
// $start: js-react-provider
import React from 'react';
import { PolywrapProvider } from '@polywrap/react';

export const App: React.FC = () => {
  return (
    <PolywrapProvider>
        <HelloWorld />
    </PolywrapProvider>
  );
};
// $end

export const ProviderWithEmptyRedirects: React.FC = () => {
  return (
// $start: js-react-provider-empty-redirects
<PolywrapProvider redirects={ [] }/>
// $end
  );
};
