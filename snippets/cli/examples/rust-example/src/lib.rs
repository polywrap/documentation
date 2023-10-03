mod wrap;

use polywrap::ByteBuf;
// $start: cli-rust-app-imports
use wrap::types::*;
// $end

pub fn main() {
  // $start: cli-rust-app-typesafe
  let ipfs_provider = "https://ipfs.io";
  let cid = "Qmc5gCcjYypU7y28oCALwfSvxCBskLuPKWpK4qpterKC7z";
  let ipfs = Ipfs::new(None);

  let data = ipfs.cat(&IpfsArgsCat{
    cid: cid.to_string(),
    ipfs_provider: ipfs_provider.to_string(),
    timeout: None,
    cat_options: None
  }, None).unwrap();
  // $end
  assert_eq!(data, ByteBuf::from("Hello World!\r\n".as_bytes().to_vec()));
}

#[cfg(test)]
mod client_tests {

  #[test]
  fn test_client() {
    super::main();
  }
}
