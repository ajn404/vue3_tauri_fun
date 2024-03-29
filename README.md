# vue3 Tauri app template

This template should help get you started developing with Vue 3 [Tauri](http://tauri.app/) app in Vite.
**It’s more like a demo that mixes various front-end technologies.**
## web site

- [Tauri Home](https://ajn404.github.io/vue3_tauri_fun/)

- [Docs](https://ajn404.github.io/vue3_tauri_fun/book/print.html)

- [Lib stats](https://ajn404.github.io/vue3_tauri_fun/stats)

### gitee 

- [国内Tauri Home](https://ajn404.gitee.io/vue3_tauri_fun/)
### netlify

- [netlify](https://taurifun.netlify.app/)

### site review

- [4 sort methods](https://ajn404.github.io/vue3_tauri_fun/#/fun/p5/algorithm/mixSort)
- [three animation](https://ajn404.github.io/vue3_tauri_fun/#/three/practice/animationWorld)
- [spline demo](https://ajn404.github.io/vue3_tauri_fun/#/three/spline)

![spline](./public/imgs/page/spline.png)


## Prerequisites

- Rust (nightly)
- Node.js
- Npm
- Mdbook

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).


## development

![script](./public/imgs/page/script.png)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```


### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

or 

```sh
npm run format
```


### run Docs

```sh
#if don not have mdbook
cargo install mdbook
npm run docs
```


### socket demo
```sh
npm run socket-server
```
