import { useWeb3ApiClient, useWeb3ApiInvoke, useWeb3ApiQuery } from '@web3api/react';

export function useWeb3ApiQuery_() {
// $start: js-react-useWeb3ApiQuery
const { execute, data, errors, loading } = useWeb3ApiQuery({
  uri: 'ens/api.helloworld.polywrap.eth',
  query: `{
    logMessage(message: "Hello World!")
  }`,
});
// $end
}

export function useWeb3ApiQuery_customProvider() {
// $start: js-react-useWeb3ApiQuery-custom-provider
const { execute, data, errors, loading } = useWeb3ApiQuery({
  provider: "custom",
  uri: 'ens/api.helloworld.polywrap.eth',
  query: `{
    logMessage(message: "Hello World!")
  }`,
});
// $end
}

export function useWeb3ApiInvoke_() {
// $start: js-react-useWeb3ApiInvoke
const { execute, data, error, loading } = useWeb3ApiInvoke({
  uri: 'ens/api.helloworld.polywrap.eth',
  module: "query",
  method: "logMessage",
  input: {
    message: "Hello World!",
  },
});
// $end
}

export function useWeb3ApiClient_() {
// $start: js-react-useWeb3ApiClient
const client = useWeb3ApiClient();
// $end
}