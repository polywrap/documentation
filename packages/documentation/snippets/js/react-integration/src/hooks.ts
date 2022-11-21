import { usePolywrapClient, usePolywrapInvoke, usePolywrapQuery } from '@polywrap/react';

export function usePolywrapClient_() {
// $start: js-react-usePolywrapClient
const client = usePolywrapClient();
// $end
}

export function usePolywrapInvoke_() {
// $start: js-react-usePolywrapInvoke
const { execute, data, error, loading } = usePolywrapInvoke({
  uri: 'ens/helloworld.polytest.eth',
  method: "logMessage",
  args: {
    message: "Hello World!",
  },
});
// $end
}

export function usePolywrapInvoke_customProvider() {
// $start: js-react-usePolywrapInvoke-custom-provider
const { execute, data, error, loading } = usePolywrapInvoke({
  provider: "custom",
  uri: 'ens/helloworld.polytest.eth',
  method: "logMessage",
  args: {
    message: "Hello World!",
  },
});
// $end
}

export function usePolywrapQuery_() {
// $start: js-react-usePolywrapQuery
const { execute, data, errors, loading } = usePolywrapQuery({
  uri: 'ens/helloworld.polytest.eth',
  query: `{
    logMessage(message: "Hello World!")
  }`,
});
// $end
}
