// $start: quickstart-swift-import-client
import SwiftUI
import PolywrapClient
// $end

func run() throws -> Void {
    print("Running...")
    
    // $start: quickstart-swift-init-client
    let client = BuilderConfig()
        .addSystemDefault()
        .addWeb3Default()
        .build()
    // $end
    
    // $start: quickstart-swift-invoke-client
    struct SHA3_256_Args : Codable {
        var message: String
    }
    
    let result: String = try client.invoke(
        uri: try Uri("wrapscan.io/polywrap/sha3@1.0"),
        method: "sha3_256",
        args: SHA3_256_Args(message: "Hello Polywrap!")
    )
    
    print(result)
    // $end
    
    // $start: quickstart-swift-uniswap
    // First we need to define our argument and return types for the fetchToken call
    struct FetchToken_Args : Codable {
        var address: String
        var chainId: String
    }
    
    struct Currency: Codable {
        var decimals: Int
        var symbol: String
        var name: String
    }
    
    struct Token: Codable {
        var address: String
        var chainId: Int
        var currency: Currency
    }
    
    // Fetch information about WETH
    let weth: Token = try client.invoke(
        uri: try Uri("wrapscan.io/polywrap/uniswap-v3@1.0"),
        method: "fetchToken",
        args: FetchToken_Args(
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            chainId: "MAINNET"
        )
    )
    
    print("WETH: \(weth)")
    
    let usdc: Token = try client.invoke(
        uri: try Uri("wrapscan.io/polywrap/uniswap-v3@1.0"),
        method: "fetchToken",
        args: FetchToken_Args(
            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            chainId: "MAINNET"
        )
    )
    
    print("USDC: \(usdc)")
    
    // Define our argument types for getPoolAddress
    struct GetPoolAddress_Args: Codable {
        var tokenA: Token
        var tokenB: Token
        var fee: String
    }
    
    let poolAddress: String = try client.invoke(
        uri: try Uri("wrapscan.io/polywrap/uniswap-v3@1.0"),
        method: "getPoolAddress",
        args: GetPoolAddress_Args(
            tokenA: weth,
            tokenB: usdc,
            fee: "MEDIUM"
        )
    )
    
    print("Pool address: \(poolAddress)")
    // $end
    
    print("Done running!R")
}

struct ContentView: View {
    var body: some View {
        VStack {
            Button("Run example", action: {
                do {
                    try run()
                }
                catch {
                    print("\(error)")
                }
            })
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
