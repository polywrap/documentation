import { ClientConfigBuilder, PolywrapClient } from "@polywrap/client-js";

// $start: js-understanding-redirects
const config = new ClientConfigBuilder()
  .addDefaults()
  .addRedirect("ens/api.helloworld.polywrap.eth", "ens/api.myhelloworld.eth")
  .build();

const client = new PolywrapClient(config);
// $end

export function understandingRedirects() {
  client.tryResolveUri({ uri: "ens/api.helloworld.polywrap.eth" });
}
