#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, read_tags])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

use tokio::fs::File;
use tokio::io::{AsyncBufReadExt, BufReader};
#[tauri::command]

///
async fn read_tags() -> Vec<String> {
    let file = File::open("assets/tags.txt").await.unwrap();
    let mut reader = BufReader::new(file).lines();

    // 创建一个可变的vector用于存储数据
    let mut data: Vec<String> = Vec::new();

    // 逐行读取文件，并将其转换为一个整数添加到vector中
    while let Some(line) = reader.next_line().await.unwrap() {
        let number = line.parse().unwrap();
        data.push(number);
    }

    // 打印vector中的数据
    println!("{:?}", data);
    data
}
