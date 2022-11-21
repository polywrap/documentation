// $start: js-create-client-instance
import { PolywrapClient } from "@polywrap/client-js";

const client = new PolywrapClient();
// $end

export function helloWorld() {
// $start: js-client-hello-world
client.invoke({
  uri: "ens/rinkeby/helloworld.dev.polywrap.eth",
  method: "logMessage",
  args: {
    message: "Hello World!"
  }
});
// $end
}
