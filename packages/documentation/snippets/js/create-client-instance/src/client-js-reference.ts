// $start: js-import-client
import { PolywrapClient } from "@polywrap/client-js";
// $end

async function main() {
// $start: js-client-invoke
// Simply instantiate the PolywrapClient.
const client = new PolywrapClient();

// ...And then you'll be able to use the `invoke`
// method to execute methods within the wrapper
// located at the specified URI.
const result = await client.invoke({
  uri: 'ens/api.example.eth',
  method: "doSomething",
  args: {
    variable: 555,
    value: "important value"
  }
});
// $end
  console.log(result);
}

export async function createJsReference() {
  await main();
}
