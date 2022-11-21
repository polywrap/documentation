import { PolywrapClient } from '@polywrap/client-js';
import { AnyMetaManifest as MetaManifest } from '@polywrap/polywrap-manifest-types-js';

export async function getMetaManifest(): Promise<MetaManifest> {
  const client = new PolywrapClient();
  const uri = "ens/api.helloworld.polywrap.eth";
// $start: js-client-getManifest-meta
const manifestString = await client.getFile(uri, { path: "./polywrap.meta.json", encoding: "utf-8" }) as string;
const manifest: MetaManifest = JSON.parse(manifestString);
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