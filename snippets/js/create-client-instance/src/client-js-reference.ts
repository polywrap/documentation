// $start: js-import-client
import { Web3ApiClient } from "@web3api/client-js";
// $end

async function main() {
// $start: js-client-query
// Simply instantiate the Web3ApiClient.
const client = new Web3ApiClient();

// ...And then you'll be able to use the `query`
// method to send GraphQL requests to any Web3API
// that's located at the specified URI.
const result = await client.query({
  uri: 'api.example.eth',
  query: `query {
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
