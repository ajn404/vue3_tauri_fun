#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            read_tags,
            read_header_from_md
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

use tokio::fs::File;
use tokio::io::{AsyncBufReadExt, AsyncReadExt, BufReader};

#[tauri::command]

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
    // println!("{:?}", data);
    data
}

//`extern`关键字用于指定外部的库或函数，它告诉编译器该函数或库的实现是在其他地方。它允许你使用外部的库或函数，而不需要在你的代码中实现它们。
extern crate pulldown_cmark;

use pulldown_cmark::{Event, HeadingLevel, Parser, Tag};

#[tauri::command]
//todo
//读取指定的md文件
async fn read_header_from_md() {
    let mut file = File::open("../docs/src/english_words/trademark.md")
        .await
        .unwrap();
    let mut contents = String::from("");
    file.read_to_string(&mut contents).await.unwrap();
    let mut next_is_heading_content = false;
    let parser = Parser::new(&contents);
    let mut headings = vec![];
    for event in parser {
        match event {
            Event::Start(Tag::Heading(level, _, _)) if level == HeadingLevel::H2 => {
                println!("Found a second-level heading!");
                next_is_heading_content = true;
            }
            Event::Text(text) if next_is_heading_content => {
                headings.push(text.to_string());
                next_is_heading_content = false;
            }
            _ => {}
        };
    }

    dbg!(headings);
}
