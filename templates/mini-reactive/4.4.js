// 分支切换与cleanup
console.log('4.4 demo1');
{
  const bucket = new WeakMap();
  const data = { ok: true, text: 'hello world' };
  const obj = new Proxy(data, {
    get(target, key) {
      if (!activeEffect) return target[key];
      track(target, key);
      return target[key];
    },
    set(target, key, newVal) {
      target[key] = newVal;
      trigger(target, key);
      return true;
    },
  });

  function track(target, key) {
    let depsMap = bucket.get(target);
    if (!depsMap) {
      depsMap = new Map();
      bucket.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if (!deps) {
      deps = new Set();
      depsMap.set(key, deps);
    }
    deps.add(activeEffect);
  }

  function trigger(target, key) {
    const depsMap = bucket.get(target);
    if (!depsMap) return;
    const deps = depsMap.get(key);
    if (!deps) return;
    deps.forEach((fn) => fn());
  }
  //注册副作用函数
  let activeEffect;
  function effect(fn) {
    console.log('effect run');
    activeEffect = fn;
    fn();
  }

  effect(() => {
    //读取操作
    // document.body.innerText = obj.ok ? obj.text : 'not';
    let x = obj.ok ? obj.text : 'not';
    console.log(x);
  });

  obj.ok = false;
  //理想的情况时obj.ok = false的设置触发effect后无论obj.text怎么变x的值都一直为'not'
  //obj.text = *** 不应该再触发effect
}
