import { Web3ApiClient } from "@web3api/client-js";

// $start: js-understanding-redirects
const client = new Web3ApiClient({
  redirects: [
    {
      from: `ens/api.helloworld.polywrap.eth`,
      to: `ens/api.myhelloworld.eth`,
    },
  ],
});
// $end

export function understandingRedirects() {
  client.resolveUri("test");
}
