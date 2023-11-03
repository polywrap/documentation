import * as App from "../types/wrap";
import path from "path";

jest.setTimeout(60000);

describe("Template Wrapper End to End Tests", () => {

  let oracle: App.Oracle;
  let wrapperUri: string;
  let apiKey: string = process.env.PPLX_API_KEY || "";

  beforeAll(() => {
    const wrapperPath: string = path.join(__dirname, "..", "..", "..");
    wrapperUri = `fs/${wrapperPath}/build`;
    oracle = new App.Oracle(undefined, undefined, wrapperUri)
  })

  it("calls obscure", async () => {
    const result = await oracle.obscure({
      data: ["Hello", "World"],
      chaosLevel: 3
    });

    if (!result.ok) throw result.error;
    expect(typeof result.value === "string").toBeTruthy();
    expect(result.value.length).toEqual(128);
  });

  it("calls enlighten", async () => {
    const question = "What is the meaning of life?";
    const result = await oracle.enlighten({ question, apiKey });

    if (!result.ok) throw result.error;
    expect(typeof result.value === "string").toBeTruthy();
  });
});

