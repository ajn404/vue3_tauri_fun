###  Typst


Typst is a new markup-based typesetting system that is designed to be as powerful as LaTeX while being much easier to learn and use

<a href = "https://typst.app/docs/" >docs<a/>


### 查询和帮助

- [man](./shell_record/man.md)
查看命令的帮助，命令的词典，更复杂的还有info,但不常用
```shell
man mv
man ls
man --help
man git 
```

- help
查看内置命令的帮助，也可以使用--help

### 文件和目录操作命令
- cd 
change directory 切换到指定的工作目录
- cp
copy 复制文件或者目录

### nushell
A new type of shell.
```shell
nu 
ls
ls | sort-by size | reverse
ps
sys
sys | get host
ls *.js
"hello" | save output.txt
```

### find
根据路径和条件搜索指定文件
```shell
find src -mtime +7  
find src -mtime +1 -name "*.ts*"
find src -name "*.mp4" -exec open {} \
```
