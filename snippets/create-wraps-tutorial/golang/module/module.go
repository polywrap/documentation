package module

import (
	"example.com/template-wasm-go/module/wrap/types"
)

func Obscure(args *types.ArgsObscure) string {
	// Handle default values
    chaosLevel := int32(1)
    if args.ChaosLevel != nil && *args.ChaosLevel >= 1 {
        chaosLevel = *args.ChaosLevel
    }

    var obscured string
    for _, data := range args.Data {
        // Shift each character by the chaos level
        for _, char := range data {
            charCode := char + rune(chaosLevel)
            obscured += string(charCode)
        }
    }
    return obscured
}
