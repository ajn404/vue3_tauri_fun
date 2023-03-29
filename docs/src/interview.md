<!-- toc -->

`下面的文档全是CHATGPT说的`

## 前端

### 图片懒加载
图片懒加载是一种常用的优化网站性能的技术，可以减少页面加载时间，提高用户体验。以下是几种常见的图片懒加载方式：

- 基于 JavaScript：通过 JavaScript 监听页面的滚动事件，当滚动到需要加载的图片位置时，再将图片加载进来。这种方式最常见，也最容易实现。常用的库有LazyLoad和Lozad.js。

- Intersection Observer：这是一种 HTML5 新特性，通过监听元素与视口（viewport）的交叉状态，实现对元素的懒加载。可以减少对DOM的操作，提高性能。不过这种方式需要浏览器支持IntersectionObserver。

- 图片占位符：在图片未加载之前，先用一张占位符图片占位，等到图片需要加载时再将占位符替换为实际图片。这种方式可以减少页面的闪烁，提高用户体验。常用的占位符图片包括base64编码的小图片和SVG图片。

- WebP格式：WebP是谷歌开发的一种新的图片格式，它可以在保持高质量的同时大幅缩小图片的大小。使用WebP格式可以减少图片的大小，从而加快页面加载速度。

### flex实现三栏布局

```html
<div class="container">
  <div class="left">左侧栏</div>
  <div class="main">主要内容</div>
  <div class="right">右侧栏</div>
</div>
<style>
.container {
  display: flex;
}

.left {
  width: 200px;
  background-color: #ccc;
}

.main {
  flex: 1;
  background-color: #eee;
}

.right {
  width: 200px;
  background-color: #ccc;
}

</style>
```

### git常用命令

git init: Initializes a new Git repository in the current directory.

git clone <repository>: Clones an existing Git repository to your local machine.

git add <file>: Adds a file to the staging area, ready to be committed.

git commit -m "<message>": Commits changes to the repository with a descriptive message.

git push: Pushes committed changes to a remote repository.

git pull: Pulls changes from a remote repository to your local machine.

git branch: Lists all branches in the repository.

git checkout <branch>: Switches to a different branch.

git merge <branch>: Merges changes from a different branch into the current branch.

git status: Shows the current status of the repository.

These are just a few of the many Git commands available. I recommend checking out the official Git documentation for more information and examples.

### js数据类型
JavaScript中有七种数据类型，分为两类：原始类型和对象类型。

原始类型包括：undefined、null、boolean、number、string、symbol（ES6新增）。

对象类型包括：Object、Array、Function、Date、RegExp、Error等。

其中，原始类型是基本数据类型，存储在栈内存中，而对象类型是引用数据类型，存储在堆内存中。在JavaScript中，变量可以存储任何类型的值，因此变量的数据类型可以动态改变。可以使用typeof运算符来检测变量的数据类型。

### 包装类（symbol为什么不可以new？）
包装类是指JavaScript中的三个特殊对象类型：Number、String和Boolean。它们可以将原始类型的值转换为对象，并提供了一些额外的方法和属性。例如，可以使用String()函数将一个数字转换为字符串，然后使用字符串的length属性获取字符串的长度。

然而，对于原始类型的值，JavaScript还提供了另一个包装类：Symbol。Symbol是ES6新增的一种原始类型，用于表示独一无二的值。与其他包装类不同的是，Symbol不能使用new关键字创建对象。这是因为Symbol是一种原始类型，而不是对象类型，因此它没有构造函数。

相反，可以使用全局的Symbol()函数来创建Symbol值。例如，可以使用以下代码创建一个名为mySymbol的Symbol值：

`const mySymbol = Symbol();`

Symbol值可以用作对象的属性名，以确保属性名的唯一性。例如，可以使用以下代码创建一个对象，并使用Symbol值作为其属性名：
```js
const obj = {
  [mySymbol]: 'Hello World'
};

console.log(obj[mySymbol]); // 输出 'Hello World'
```


总之，包装类是JavaScript中的一种特殊对象类型，用于将原始类型的值转换为对象，并提供了一些额外的方法和属性。而Symbol作为一种原始类型，不能使用new关键字创建对象，但可以使用全局的Symbol()函数创建Symbol值。

### css脱离文档流
关于CSS脱离文档流，当一个元素脱离文档流时，它将不再占据文档中的空间，而是可以自由移动到其他位置。这可以通过以下方式实现：

使用position: absolute将元素从文档流中移除，并相对于其最近的已定位祖先元素进行定位。如果没有已定位的祖先元素，则相对于文档的初始包含块进行定位。

使用position: fixed将元素从文档流中移除，并相对于浏览器窗口进行定位。这意味着元素将保持在页面上方，即使页面滚动。

使用float将元素从文档流中移除，并将其浮动到其容器的左侧或右侧。这通常用于创建多列布局。

需要注意的是，当元素脱离文档流时，它可能会影响其他元素的布局。例如，如果一个元素被移除，它下面的元素将填补它的空间。因此，需要谨慎使用这些属性，并确保它们不会破坏页面的布局。

以下是一个使用position: absolute将元素从文档流中移除的示例：

```html
<div class="container">
  <div class="box"></div>
  <div class="content"></div>
</div>

<style>
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: 
red;
}

.content {
  margin-top: 100px;
  background-color: 
blue;
}

</style>

```

在此示例中，.box元素使用position: absolute将其从文档流中移除，并相对于其最近的已定位祖先元素进行定位。.content元素使用`margin


## 网络

### Token身份鉴权

Token身份鉴权是一种常用的网络安全机制，用于验证用户身份和保护敏感数据。在传统的身份验证机制中，用户需要输入用户名和密码等凭据来验证自己的身份，但这种方式存在安全隐患，例如可能会被黑客攻击、密码可能被泄露等。而使用token身份鉴权机制可以提高安全性，避免这些风险。

Token身份鉴权机制的基本原理是：用户在登录成功后，服务器会生成一个唯一的token，并将其发送给客户端。客户端在后续请求中携带该token，服务器收到请求后会通过解析token验证用户身份的合法性。如果token验证通过，服务器将响应请求，否则拒绝访问。因此，客户端不需要每次都输入用户名和密码等凭据，只需要在第一次登录时获取token，并在后续请求中携带该token即可。

具体来说，token身份鉴权机制一般包括以下步骤：

用户提供凭据（如用户名和密码）进行登录。
服务器验证凭据的合法性，如果验证通过，生成一个唯一的token，并将其发送给客户端。
客户端在后续的请求中携带该token。
服务器收到请求后，解析token，验证用户身份的合法性。
如果token验证通过，服务器响应请求；否则，服务器拒绝请求。
Token身份鉴权机制可以使用不同的加密算法来保护token的安全性，例如对称加密算法和非对称加密算法等。同时，服务器可以设置token的有效期限，以确保token的安全性和使

用的有效性。
总之，token身份鉴权机制是一种常用的网络安全机制，可以提高系统的安全性和用户的便利性。
### 关于WebSocket协议

WebSocket是一种协议，用于在客户端和服务器之间建立双向通信的网络连接。相对于传统的HTTP请求，WebSocket具有更低的延迟、更高的实时性和更高的效率。它使用标准的HTTP握手协议进行握手，然后通过一条持久的双向通信通道来实现数据交换。

WebSocket协议的主要特点包括：

双向通信：客户端和服务器可以在同一时间内相互发送数据，而不必等待响应。
实时性：WebSocket支持实时数据传输，可以在任何时候向客户端或服务器发送数据。
低延迟：WebSocket使用单个TCP连接，避免了建立和关闭连接的开销，从而减少了延迟。
轻量级：WebSocket的头部信息比较小，有效载荷比较大，传输效率较高。
安全性：WebSocket支持SSL/TLS加密协议，保证了数据的安全性。
WebSocket协议的工作流程如下：

客户端向服务器发送一个HTTP请求，请求中包含一个Upgrade头，表示要升级到WebSocket协议。
服务器返回一个HTTP响应，其中包含Upgrade头，并指定协议为WebSocket。
握手完成后，客户端和服务器之间建立了一条持久的双向通信通道，可以相互发送数据。
客户端和服务器都可以随时关闭WebSocket连接。
WebSocket协议广泛应用于实时性要求较高的应用场景，如在线游戏、聊天室、实时数据展示等。

### http状态码500 和502

HTTP状态码是服务器向客户端返回的一个三位数的数字，表示客户端请求的处理状态。其中，502和500是两个常见的状态码。

HTTP状态码502表示“Bad Gateway”，表示服务器作为网关或代理，从上游服务器（如应用服务器或Web服务器）接收到的响应无效。通常情况下，这种情况是由于上游服务器发生故障或未能及时响应造成的。客户端可以尝试重新发送请求，或者联系网站管理员解决问题。

HTTP状态码500表示“Internal Server Error”，表示服务器在执行请求时遇到了内部错误。这个状态码表示服务器无法完成客户端的请求，原因可能是服务器端程序错误、配置问题或者系统故障等。客户端可以尝试重新发送请求，或者联系网站管理员解决问题。

需要注意的是，当服务器返回500错误时，客户端不应该尝试重新发送请求，因为该请求所包含的数据可能会在服务器端引起进一步的问题，甚至可能会造成数据损坏。相反，客户端应该向网站管理员报告该问题，并等待服务器端的修复。

综上所述，HTTP状态码502表示上游服务器无法处理请求，而HTTP状态码500表示服务器内部出现错误。客户端可以根据不同的状态码采取不同的措施，以确保请求的正确处理和客户端的良好体验。


### 浏览器缓存机制

浏览器缓存机制是指浏览器在访问网站时会缓存一些静态资源，以便下一次访问同一网站时可以直接从缓存中获取资源，从而加快网站的加载速度。常见的缓存策略有两种：

强缓存：强缓存是指浏览器在第一次请求资源时，会将资源的一些元数据信息（如过期时间、缓存时间等）存储在本地，下一次请求同一资源时，浏览器会根据这些元数据信息判断是否需要重新请求。如果缓存时间没有过期，就可以直接从缓存中获取资源，不需要向服务器发送请求。常见的强缓存策略有两种：Expires和Cache-Control。

协商缓存：协商缓存是指浏览器在第一次请求资源时，服务器会返回一个响应头信息（如Last-Modified、Etag等），标识该资源最后一次修改时间和内容。下一次请求同一资源时，浏览器会将这些信息与本地缓存中的信息进行比较，如果发现资源有更新，就会向服务器发送请求，否则直接从缓存中获取资源。常见的协商缓存策略有两种：Last-Modified和Etag。

需要注意的是，缓存机制可以加快网站的加载速度，但也会导致网站更新不及时。为了解决这个问题，可以通过在静态资源的URL中添加版本号或者hash值来避免缓存问题。同时，在设计网站时，也可以根据资源的类型和更新频率来选择合适的缓存策略，以确保网站的快速响应和更新。

### cache-control的属性都有哪些（public和private的区别？no-store和no-cache的区别？max-age设置最大缓存时间）？cache-control和expires哪个优先级高？

Cache-Control 是一个 HTTP 响应头，用于控制浏览器和其他缓存机制如何缓存响应。它可以具有以下属性：

- public：响应可以被任何中间缓存机构缓存，例如，浏览器和CDN。
- private：响应只能被私有缓存机构缓存，例如，浏览器的缓存。相反，public响应可以被共享缓存机构缓存，例如，CDN。
- no-store：响应不能被缓存，必须在每次请求时重新获取。
- no-cache：缓存可以存储响应，但在使用缓存副本之前必须先将其与原始服务器进行重新验证。
- max-age：响应可以被缓存的最长时间（以秒为单位）。
当Cache-Control和Expires同时存在时，Cache-Control优先级高于Expires。这是因为Cache-Control可以提供更多的缓存控制选项，并且可以与其他缓存控制头一起使用，例如ETag和Last-Modified。而Expires只能指定响应过期的确切日期和时间。

### no-cache 和 max-age=0的区别

"no-cache" 和 "max-age=0" 是 HTTP 缓存控制中的两种不同的指令，它们有着不同的含义和作用。

"No-cache" 表示客户端在使用缓存副本之前必须先与服务器确认资源是否被修改。这意味着客户端每次请求资源时都要向服务器发起请求，以确保使用的是最新版本的资源。服务器在响应请求时可能会返回一个新的资源或者告诉客户端使用缓存的资源是最新的。

"Max-age=0" 则表示客户端不应该使用缓存的资源，而应该直接从服务器获取最新的资源。如果缓存中有资源副本，则客户端会向服务器发起条件请求，请求中会包含一个 If-Modified-Since 或者 If-None-Match 头部，服务器在收到请求后会检查资源是否被修改，如果资源没有被修改，则返回一个 304 Not Modified 响应，否则返回一个新的资源。

因此，两者的区别在于，"no-cache" 指令要求客户端每次都要与服务器进行通信，而 "max-age=0" 指令则要求客户端不使用缓存，直接从服务器获取最新的资源。


###  跨域是什么，如何解决

跨域是由Web浏览器实现的一项安全功能，它防止Web页面向不同于提供原始页面的域发出请求。这是为了防止恶意网站窃取用户数据或代表用户执行未经授权的操作。

要启用跨域请求，服务器需要在其响应中包含特定的HTTP头。最常见的头是Access-Control-Allow-Origin，它指定允许哪些域名向服务器发出请求。其他头文件，如Access-Control-Allow-Methods和Access-Control-Allow-Headers，也可以用于指定允许的HTTP方法和头文件。

在客户端方面，可以使用JSONP（带填充的JSON）或CORS代理等技术来解决同源策略问题。JSONP涉及将响应包装在回调函数中，并使用script标记加载响应，而CORS代理涉及将请求发送到第三方服务器，该服务器将请求转发到目标服务器并添加必要的CORS头文件到响应中。

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://example.com'
}));

app.get('/api/data', (req, res) => {
  // send data to the client
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

```

在此示例中，使用cors中间件将Access-Control-Allow-Origin标头设置为https://example.com，允许该域从/api/data端点访问请求。