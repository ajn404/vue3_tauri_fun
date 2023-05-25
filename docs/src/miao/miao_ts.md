### Omit
```ts
interface User {
  name: string;
  age: number;
  email: string;
}

type UserWithoutEmail = Omit<User, 'email'>;
```


### replace(/0+$/, '')
你可以重写 toFixed 方法来省略小数点末尾的0。下面是一个示例代码：
```js
Number.prototype.toFixed = function(n) {
    var power = Math.pow(10, n);
    var fixed = (Math.round(this * power) / power).toString();
    fixed += (fixed.indexOf('.') == -1) ? '.' : '';
    var padding = n + 1 - (fixed.length - fixed.indexOf('.'));
    for (var i = 0; i < padding; i++) fixed += '0';
    return fixed.replace(/0+$/, '');
}
```
这段代码会重写 Number 对象的 toFixed 方法，使其在保留指定位数的小数点后，自动省略末尾的0。希望这对你有帮助！
