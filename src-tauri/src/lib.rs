// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
const PI: f64 = std::f64::consts::PI;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn square_area(len: i32) -> i32 {
    len * len
}

#[tauri::command]
fn rectangle_area(len: i32, width: i32) -> i32 {
    len * width
}

#[tauri::command]
fn circle_area(radius: f64) -> f64 {
    PI * radius * radius
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            square_area,
            rectangle_area,
            circle_area
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
