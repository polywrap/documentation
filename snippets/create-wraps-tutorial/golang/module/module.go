package module

import (
	"example.com/template-wasm-go/module/wrap/types"
	"example.com/template-wasm-go/module/wrap/imported/sha3"
	"example.com/template-wasm-go/module/wrap/imported/http"
	"fmt"
)

func Obscure(args *types.ArgsObscure) string {
	// Handle default values
    chaosLevel := int32(1)
    if args.ChaosLevel != nil && *args.ChaosLevel >= 1 {
        chaosLevel = *args.ChaosLevel
    }

    var obscured string
    for _, data := range args.Data {
        tempData := data
		for i := int32(0); i < chaosLevel; i++ {
		    hashArgs := &sha3.Sha3_ArgsKeccak_256 { Message: tempData }
			hashed, err := sha3.Sha3_Keccak_256(hashArgs)
			if err != nil {
				return ""
			}
			tempData = hashed
		}
		obscured += tempData
    }
    return obscured
}

func Enlighten(args *types.ArgsEnlighten) string {
	headers := map[string]string{
		"accept":       "application/json",
		"content-type": "application/json",
		"Authorization": fmt.Sprintf("Bearer %s", args.ApiKey),
	}

	body := fmt.Sprintf(`{
		"model": "mistral-7b-instruct",
		"messages": [
			{"role": "system", "content": "Be precise and concise."},
			{"role": "user", "content": "%s"}
		]
	}`, args.Question)

	httpArgs := &http.Http_ArgsPost{
		Url: "https://api.perplexity.ai/chat/completions",
		Request: &http.Http_Request{
			Headers:      headers,
			ResponseType: http.Http_ResponseTypeTEXT,
			Body:         &body,
		},
	}

	response, err := http.Http_Post(httpArgs)
	if err != nil {
		return ""
	}

	if response.Status != 200 {
		return fmt.Sprintf("request failed with status %d", response.Status)
	}

	if response.Body == nil {
		return "request failed with null body"
	}

	return *response.Body
}

