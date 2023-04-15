import { usePolywrapClient, usePolywrapInvoke, usePolywrapQuery } from '@polywrap/react';

export function usePolywrapClient_() {
// $start: js-react-usePolywrapClient
const client = usePolywrapClient();
// $end
}

export function usePolywrapInvoke_() {
// $start: js-react-usePolywrapInvoke
const { execute, data, error, loading } = usePolywrapInvoke({
  uri: 'ens/wraps.eth:logging@1.0.0',
  method: "info",
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
  uri: 'ens/wraps.eth:logging@1.0.0',
  method: "info",
  args: {
    message: "Hello World!",
  },
});
// $end
}