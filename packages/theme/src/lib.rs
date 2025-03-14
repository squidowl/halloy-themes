use halloy_theme::Colors;
use thiserror::Error;
use wasm_bindgen::{JsValue, prelude::wasm_bindgen};

#[wasm_bindgen]
pub fn decode(content: &str) -> Result<JsValue, Error> {
    let colors = Colors::decode_base64(content)?;
    Ok(serde_wasm_bindgen::to_value(&colors)?)
}

#[derive(Debug, Error)]
pub enum Error {
    #[error("failed to decode theme from base64 encoded string: {0}")]
    Decode(#[from] halloy_theme::Error),
    #[error("failed to convert theme to js value: {0}")]
    Convert(#[from] serde_wasm_bindgen::Error),
}

impl From<Error> for JsValue {
    fn from(value: Error) -> Self {
        JsValue::from_str(&value.to_string())
    }
}
