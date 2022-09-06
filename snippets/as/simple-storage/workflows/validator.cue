// $start: cue-simple-storage-workflow-validator
package e2e

cases: {
  $0: {
    data: =~"^0x[A-Fa-f0-9]{40}$",
    error?: _|_, // Never fails
  }
  case1: {
    $0: {
      data: =~"^0x[A-Fa-f0-9]{64}$",
      error?: _|_,
    }
    $1: {
      data: uint,
      error?: _|_
    }
  }
  case2: {
		$0: {
			data: {
				txReceipt: string,
				ipfsHash: "QmPhAJz5QbidN3LgT2eDiu6Z3nCFs2gYQMbjgEAncrGsis"
			},
			error?: _|_,
		}
		$1: {
			data: "Hello from IPFS!",
			error?: _|_,
		}
	}
}
// $end