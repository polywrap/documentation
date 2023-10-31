use crate::types::wrap::types::{
    Oracle,
    OracleArgsObscure,
    OracleArgsEnlighten
};
use std::env;

#[test]
fn obscure() {
    let args = OracleArgsObscure {
        data: vec![String::from("Hello"), String::from("World")],
        chaos_level: Some(3)
    };
    let oracle: Oracle = Oracle::new(None);
    let result = oracle.obscure(&args, None).unwrap();
    assert_eq!(result.len(), 128);
}

#[test]
fn enlighten() {
    let args = OracleArgsEnlighten {
        question: String::from("What is the meaning of life?"),
        api_key: env::var("PPLX_API_KEY").expect("API_KEY must be set")
    };
    let oracle: Oracle = Oracle::new(None);
    let result = oracle.enlighten(&args, None).unwrap();
    assert_ne!(result.len(), 0);
}