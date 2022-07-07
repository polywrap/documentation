// $start: js-import-client
import { PolywrapClient } from "@polywrap/client-js";
// $end

async function main() {
// $start: js-client-query
// Simply instantiate the PolywrapClient.
const client = new PolywrapClient();

// ...And then you'll be able to use the `query`
// method to send GraphQL requests to any Polywrap
// that's located at the specified URI.
const result = await client.query({
  uri: 'api.example.eth',
  query: `module {
    doSomething(
      variable: $variable
      value: "important value"
    ) {
      returnData
    }
  }`,
  variables: {
    variable: 555,
  },
});
// $end
  console.log(result);
}

export async function createJsReference() {
  await main();
}
