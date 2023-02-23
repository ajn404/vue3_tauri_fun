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
 
const localAddress = 'http://127.0.0.1/api/v1/';
const proxyOrigibTargets = [
  {
    name: '/login',
    target: `${localAddress}login-service`,
  },
  {
    name: '/dcsRepair',
    target: `${localAddress}dcs-repair-service`,
  },
  {
    name: '/dcsPart',
    target: `${localAddress}dcs-part-service`,
  },
  {
    name: '/dcsManage',
    target: `${localAddress}dcs-manage-service`,
  },
  {
    name: '/dcsVehicle',
    target: `${localAddress}dcs-vehicle-service`,
  },
  {
    name: '/dmsRepair',
    target: `${localAddress}dms-repair-service`,
  },
  {
    name: '/dmsPart',
    target: `${localAddress}dms-part-service`,
  },
  {
    name: '/dmsInterface',
    target: `${localAddress}dms-interface-service`,
  },
  {
    name: '/media',
    target: 'https://media.evscrm.ford.com.cn',
  },
];

const proxy = {};
proxyOrigibTargets.map((item) => {
  proxy[item.name] = {
    target: item.target,
    changeOrigin: true,
    rewrite: (path) => path.replace(item.name, ''),
  };
});

const loadEnv = (mode) => {
  
  const env = require(`./env/.env.${mode}.js`);
  
  const ret = {};
  for (const key in env) {
    ret[key] = JSON.stringify(env[key]);
  }
  return ret;
};



export default defineConfig(({ command, mode, ssrBuild }) => {
console.log(command,loadEnv(mode),ssrBuild,);
  return{
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: loadEnv(mode),
    css: {
      postcss: './postcss.config.js',
      devSourcemap: true,
    },
    server: {
      open: true,
      proxy: proxy,
    },
  
    build: {
      // 生产环境下，去掉console.log语句
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
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
        dirs: ['src/components'],
        // ui库解析器
        // resolvers: [ElementPlusResolver()],
        extensions: ['vue'],
        // 配置文件生成位置
        dts: 'src/components.d.ts',
      }),
    ],
  }
});
