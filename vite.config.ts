import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs:['src/components'],
      extensions:['vue'],
      deep:true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
          resolveIcons:true
        }),
      ],
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, 
});
