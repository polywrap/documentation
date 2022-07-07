import { usePolywrapClient, usePolywrapInvoke, usePolywrapQuery } from '@polywrap/react';

export function usePolywrapQuery_() {
// $start: js-react-usePolywrapQuery
const { execute, data, errors, loading } = usePolywrapQuery({
  uri: 'ens/api.helloworld.polywrap.eth',
  query: `{
    logMessage(message: "Hello World!")
  }`,
});
// $end
}

export function usePolywrapQuery_customProvider() {
// $start: js-react-usePolywrapQuery-custom-provider
const { execute, data, errors, loading } = usePolywrapQuery({
  provider: "custom",
  uri: 'ens/api.helloworld.polywrap.eth',
  query: `{
    logMessage(message: "Hello World!")
  }`,
});
// $end
}

export function usePolywrapInvoke_() {
// $start: js-react-usePolywrapInvoke
const { execute, data, error, loading } = usePolywrapInvoke({
  uri: 'ens/api.helloworld.polywrap.eth',
  method: "logMessage",
  args: {
    message: "Hello World!",
  },
});
// $end
}

export function usePolywrapClient_() {
// $start: js-react-usePolywrapClient
const client = usePolywrapClient();
// $end
}