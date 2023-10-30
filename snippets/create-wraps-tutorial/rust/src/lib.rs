pub mod wrap;
pub use wrap::prelude::*;
use crate::wrap::imported::ArgsKeccak256;

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
}
