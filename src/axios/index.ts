

const impAll = ctx => {

  const map = {}
  for (const key of Object.keys(ctx)) {
    const keyArr = key.split('/')
    keyArr.shift() // 移除.    
    map[keyArr.join('.').replace(/\.ts$/g, '')] = ctx[key]() || {}
  }
  return map
}




// const api = impAll(require.context('./modules/', true, /\.ts/))

const modulesFiles = import.meta.glob('./modules/*.ts');

console.log(modulesFiles);
// Object.keys(modulesFiles).forEach((modulePath) => {
//   const module = modulesFiles[modulePath];
//   // 执行模块逻辑

//   console.log(module);
  
// });
console.log(impAll(modulesFiles));



const api = ()=>{}
export default api

