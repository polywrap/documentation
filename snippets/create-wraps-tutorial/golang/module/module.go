package module

import (
	"example.com/template-wasm-go/module/wrap/types"
	"example.com/template-wasm-go/module/wrap/imported/sha3"
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
