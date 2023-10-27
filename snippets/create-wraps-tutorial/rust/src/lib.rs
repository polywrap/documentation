pub mod wrap;
pub use wrap::prelude::*;

impl ModuleTrait for Module {
    fn obscure(args: ArgsObscure) -> Result<String, String> {
        // handle default values
        let chaos_level = args.chaos_level.unwrap_or(1).max(1);

        let mut obscured = String::new();
        for data in &args.data {
            // shift each character by the chaos level
            for c in data.chars() {
                let char_code = c as u32 + chaos_level as u32;
                if let Some(new_char) = std::char::from_u32(char_code) {
                    obscured.push(new_char);
                }
            }
        }
        Ok(obscured)
    }
}
