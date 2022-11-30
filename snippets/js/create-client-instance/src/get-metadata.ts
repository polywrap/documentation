import { PolywrapClient } from '@polywrap/client-js';
import { AnyMetaManifest as MetaManifest } from '@polywrap/polywrap-manifest-types-js';

export async function getMetaManifest(): Promise<MetaManifest | undefined> {
  const client = new PolywrapClient();
  const uri = "ens/api.helloworld.polywrap.eth";
// $start: js-client-getManifest-meta
const result = await client.getFile(uri, { path: "./polywrap.meta.json", encoding: "utf-8" });
if (!result.ok) return undefined;
const manifest: MetaManifest = JSON.parse(result.value as string);
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