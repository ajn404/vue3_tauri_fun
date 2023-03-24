import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Components from 'unplugin-vue-components/vite';
import {
  ElementPlusResolver,
  AntDesignVueResolver,
  VantResolver,
  HeadlessUiResolver,
  ElementUiResolver,
} from 'unplugin-vue-components/resolvers';

type MyObject = {
  [key: string]: any;
};

const loadEnv = (mode: string) => {
  const env: [string] = require(`./env/.env.${mode}.js`);
  const ret: MyObject = {};
  for (const key in env) {
    ret[key] = JSON.stringify(env[key]);
  }
  console.log(ret);

  return ret;
};

export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(command, loadEnv(mode), ssrBuild);
  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: loadEnv(mode),
    css: {
      postcss: './postcss.config.js',
      devSourcemap: true,
      preprocessorOptions: {
        scss: {},
      },
    },
    server: {
      open: true,
    },

    build: {},
    plugins: [
      vue(),
      vueJsx(),
      Components({
        // ui库解析器，也可以自定义
        resolvers: [
          ElementPlusResolver(),
          AntDesignVueResolver(),
          VantResolver(),
          HeadlessUiResolver(),
          ElementUiResolver(),
        ],
        types: [
          {
            from: 'vue-codemirror',
            names: ['Codemirror'],
          },
        ],
        dirs: ['src/components'],
        // ui库解析器
        // resolvers: [ElementPlusResolver()],
        extensions: ['vue'],
        // 配置文件生成位置
        dts: 'src/components.d.ts',
      }),
    ],
  };
});
