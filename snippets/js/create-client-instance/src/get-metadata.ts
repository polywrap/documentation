import { MetaManifest, Web3ApiClient } from '@web3api/client-js';

export async function getMetaManifest(): Promise<MetaManifest> {
  const client = new Web3ApiClient();
  const uri = "ens/api.helloworld.web3api.eth";
// $start: js-client-getManifest-meta
const manifest: MetaManifest = await client.getManifest(uri, { type: "meta" });
// $end
  if (manifest.icon) {
// $start: js-client-getFile-icon
const isBuffer = await client.getFile(uri, { path: manifest.icon });
const isString = await client.getFile(uri, { path: manifest.icon, encoding: "utf-8" });
// $end
    if (typeof isBuffer === "string") {
      throw Error(`client.getFile returned a string when a buffer was expected.\nuri: ${uri}\npath: ${manifest.icon}`);
    }
    if (typeof isString !== "string") {
      throw Error(`client.getFile returned a buffer when a string was expected.\nuri: ${uri}\npath: ${manifest.icon}`);
    }
  }
  return manifest;
}