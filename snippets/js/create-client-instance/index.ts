// $start: js-create-client-instance
import { Web3ApiClient } from "@web3api/client-js";

const client = new Web3ApiClient();
// $end

// $start: js-client-hello-world
client.invoke({
  uri: "ens/api.helloworld.web3api.eth",
  module: "query",
  method: "logMessage",
  input: {
    message: "Hello World!"
  }
});
// $end
