import {
  Args_enlighten,
  Args_obscure,
  Http_Module,
  Http_Request,
  Http_Response,
  Http_ResponseType,
  ModuleBase,
  Sha3_Module
} from './wrap';

export class Module extends ModuleBase {
  obscure(args: Args_obscure): string {
    // handle default values
    const chaosLevel = args.chaosLevel || 1;

    // obscure the data with chaos
    let obscured: string = "";
    for (let i = 0; i < args.data.length; ++i) {
      let data = args.data[i];
      for (let j = 0; j < chaosLevel; ++j) {
        const result = Sha3_Module.keccak_256({ message: data })
        if (!result.ok) throw Error("hash failed");
        data = result.value!!;
      }
      obscured += data;
    }
    return obscured;
  }

  enlighten(args: Args_enlighten): string {
    const request: Http_Request = {
      headers: new Map<string, string>()
        .set('accept', 'application/json')
        .set('content-type', 'application/json')
        .set("Authorization", `Bearer ${args.apiKey}`),
      responseType: Http_ResponseType.TEXT,
      body: JSON.stringify({
        model: 'mistral-7b-instruct',
        messages: [
          {role: 'system', content: 'Be precise and concise.'},
          {role: 'user', content: args.question}
        ]
      }),
      urlParams: null,
      formData: null,
      timeout: null,
    };

    const result: Result<Http_Response | null> = Http_Module.post({
      url: "https://api.perplexity.ai/chat/completions",
      request,
    });

    if (!result.ok) throw result.error;
    const response = result.value;

    if (response == null) {
      throw new Error("request failed with null response");
    }

    if (response.status != 200) {
      throw new Error(`request failed with status ${response.status}`);
    }

    if (response.body == null) {
      throw new Error("request failed with null body");
    }

    return response.body;
  }
}