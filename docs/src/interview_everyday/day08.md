window.btoa使用方法

window.btoa()是一个JavaScript的内置函数，用于将字符串转换为Base64编码的字符串。

使用方法如下：

```js
var encodedString = window.btoa("Hello World"); 
// 将字符串"Hello World"转换为Base64编码 
console.log(encodedString); 
// 输出: "SGVsbG8gV29ybGQ="  
// 反转换Base64编码的字符串为原始字符串 
var decodedString = window.atob(encodedString); 
console.log(decodedString); 
// 输出: "Hello World"
```

需要注意的是，window.btoa()只能处理ASCII字符集内的字符串，如果要编码的字符串包含非ASCII字符（如中文、日文等），需要先将其转换为UTF-8编码的字节数组，然后再进行Base64编码。