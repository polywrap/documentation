pub mod wrap;
pub use wrap::prelude::*;
use crate::wrap::imported::{ArgsKeccak256, ArgsPost};
use polywrap_wasm_rs::Map;

impl ModuleTrait for Module {
    fn obscure(args: ArgsObscure) -> Result<String, String> {
        // handle default values
        let chaos_level = args.chaos_level.unwrap_or(1).max(1);

        let mut obscured = String::new();
        for data in &args.data {
            let mut message = data.clone();
            for _ in 0..chaos_level {
                message = Sha3Module::keccak_256(&ArgsKeccak256 { message })?;
            }
            obscured += &message;
        }
        Ok(obscured)
    }

    fn enlighten(args: ArgsEnlighten) -> Result<String, String> {
        let mut headers = Map::new();
        headers.insert("accept".to_string(), "application/json".to_string());
        headers.insert("content-type".to_string(), "application/json".to_string());
        headers.insert("Authorization".to_string(), format!("Bearer {}", args.api_key));

        let body = format!(r#"{{
    "model": "mistral-7b-instruct",
    "messages": [
        {{"role": "system", "content": "Be precise and concise."}},
        {{"role": "user", "content": "{}"}}
    ]
}}"#, args.question);

        let response = HttpModule::post(&ArgsPost {
            url: "https://api.perplexity.ai/chat/completions".to_string(),
            request: Some(HttpRequest {
                headers: Some(headers),
                response_type: HttpResponseType::TEXT,
                body: Some(body),
                url_params: None,
                form_data: None,
                timeout: None,
            }),
        })?.ok_or("request failed with null body".to_string())?;

        if response.status != 200 {
            return Err(format!("request failed with status {}", response.status));
        }
        response.body.ok_or("request failed with null body".to_string())
    }
}
