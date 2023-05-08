console.log('4.4 完成分支切换和cleanup');
{
  let activeEffect;

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

  //set时触发副作用函数
  function trigger(target, key) {
    const depsMap = bucket.get(target);
    if (!depsMap) return;
    const deps = depsMap.get(key);
    if (!deps) return;
    // deps.forEach((fn) => fn());
    const depsToRun = new Set(deps);
    depsToRun.forEach((fn) => fn());
  }

  function track(target, key) {
    let depsMap = bucket.get(target);
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()));
    }
    let deps = depsMap.get(key);
    if (!deps) {
      depsMap.set(key, (deps = new Set()));
    }
    deps.add(activeEffect);
    activeEffect.deps.push(deps);
  }

  //清除
  function cleanup(effectFn) {
    for (let i = 0; i < effectFn.deps.length; i++) {
      const deps = effectFn.deps[i];
      deps.delete(effectFn);
    }
    effectFn.deps.length = 0;
  }

  function effect(fn) {
    console.log('effect run');

    const effectFn = function () {
      cleanup(effectFn);
      activeEffect = effectFn;
      fn();
    };
    effectFn.deps = [];
    effectFn();
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
  for (let i = 0; i < 10; i++) {
    obj.text = `${i} world`;
  }
}
