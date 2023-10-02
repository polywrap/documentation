// $start: quickstart-rust-use-client
use polywrap::*;
// $end

// $start: quickstart-rust-invoke-structs
#[derive(Serialize)]
struct Sha3_256Args {
    message: String,
}
// $end

// $start: quickstart-rust-uniswap-structs
#[derive(Serialize)]
struct FetchTokenArgs {
    address: String,
    #[serde(rename = "chainId")]
    chain_id: String,
}

#[derive(Serialize, Deserialize, Debug)]
struct Currency {
    decimals: u32,
    symbol: String,
    name: String,
}

#[derive(Serialize, Deserialize, Debug)]
struct Token {
    address: String,
    #[serde(rename = "chainId")]
    chain_id: u32,
    currency: Currency,
}

#[derive(Serialize)]
struct GetPoolAddressArgs {
    #[serde(rename = "tokenA")]
    token_a: Token,
    #[serde(rename = "tokenB")]
    token_b: Token,
    fee: String,
}
// $end

fn main() {

    // $start: quickstart-rust-init-client
    let mut config = PolywrapClientConfig::new();
    config
        .add(SystemClientConfig::default().into())
        .add(Web3ClientConfig::default().into());

    let client = PolywrapClient::new(config.build());
    // $end

    // $start: quickstart-rust-invoke-client
    let result = client.invoke::<String>(
        &uri!("wrapscan.io/polywrap/sha3@1.0"),
        "sha3_256",
        Some(
            &to_vec(&Sha3_256Args {
                message: "test".to_string(),
            })
            .unwrap(),
        ),
        None,
        None,
    );

    match result {
        Ok(v) => println!("{}", v),
        Err(e) => panic!("{}", e),
    };
    // $end

    // $start: quickstart-rust-uniswap
    let weth_result = client.invoke::<Token>(
        &uri!("wrapscan.io/polywrap/uniswap-v3@1.0"),
        "fetchToken",
        Some(
            &to_vec(&FetchTokenArgs {
                address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2".to_string(),
                chain_id: "MAINNET".to_string(),
            })
            .unwrap(),
        ),
        None,
        None,
    );

    let weth = match weth_result {
        Ok(v) => {
            println!("WETH: {:#?}", v);
            v
        }
        Err(e) => panic!("{}", e),
    };

    let usdc_result = client.invoke::<Token>(
        &uri!("wrapscan.io/polywrap/uniswap-v3@1.0"),
        "fetchToken",
        Some(
            &to_vec(&FetchTokenArgs {
                address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48".to_string(),
                chain_id: "MAINNET".to_string(),
            })
            .unwrap(),
        ),
        None,
        None,
    );

    let usdc = match usdc_result {
        Ok(v) => {
            println!("USDC: {:#?}", v);
            v
        }
        Err(e) => panic!("{}", e),
    };

    let pool_address_result = client.invoke::<String>(
        &uri!("wrapscan.io/polywrap/uniswap-v3@1.0"),
        "getPoolAddress",
        Some(
            &to_vec(&GetPoolAddressArgs {
                token_a: weth,
                token_b: usdc,
                fee: "MEDIUM".to_string(),
            })
            .unwrap(),
        ),
        None,
        None,
    );

    match pool_address_result {
        Ok(v) => println!("Pool address: {}", v),
        Err(e) => panic!("{}", e),
    };
    // $end
}
