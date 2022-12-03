import { PolywrapClient } from "@polywrap/client-js";

// $start: js-understanding-redirects
const client = new PolywrapClient({
  redirects: [
    {
      from: "ens/api.helloworld.polywrap.eth",
      to: "ens/api.myhelloworld.eth",
    },
  ],
});
// $end

export function understandingRedirects() {
  client.tryResolveUri({ uri: "ens/api.helloworld.polywrap.eth" });
}
