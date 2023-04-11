import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { visualizer } from 'rollup-plugin-visualizer';
import Components from 'unplugin-vue-components/vite';
import { config } from './config/postcss.config';
import {
  ElementPlusResolver,
  AntDesignVueResolver,
  VantResolver,
  HeadlessUiResolver,
  ElementUiResolver,
} from 'unplugin-vue-components/resolvers';

type MyObject = {
  [key: string]: string;
};

const loadEnv = (mode: string) => {
  const env: [string] = require(`./env/.env.${mode}.js`);
  const ret: MyObject = {};
  for (const key in env) {
    ret[key] = JSON.stringify(env[key]);
  }
  return ret;
};

export default defineConfig(async ({ command, mode, ssrBuild }) => {
  const module = await import('internal-ip');
  let host = await module.internalIpV4();
  const base = JSON.parse(loadEnv(mode).BASE);

  return {
    base: base.trim(),
    
    css: {
      postcss: config,
      devSourcemap: true,
      preprocessorOptions: {
        scss: {},
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: loadEnv(mode),
    server: {
      host: '0.0.0.0', // listen on all addresses
      port: 5173,
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host,
        port: 5173,
      },
    },

    build: {
      chunkSizeWarningLimit: 1000, //lazy
      rollupOptions: {
        output: {
          manualChunks: {
            p5: ['p5'],
          },
          sanitizeFileName: (filename: string): string => {
            if (filename.includes('plugin-vue')) {
              return filename.replace('\0', '');
            } else {
              return filename;
            }
          },
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      visualizer(),
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
