import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { mockServe } from "./src/plugin/mockServe";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    build: {
      reportCompressedSize: false, // 禁用 压缩大小报告,以提高大型项目的构建性能。
      // https://www.zhihu.com/question/518443897/answer/2397938046
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        com: path.resolve(__dirname, "/src/components"),
        assets: "/src/assets",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "/src/styles/_variables";
          `,
        },
      },

      // postcss: {
      //   plugins: [
      //     {
      //       postcssPlugin: 'internal:charset-removal',
      //       AtRule: {
      //         // 去除 warning: "@charset" must be the first rule in the file
      //         charset: (atRule) => atRule.name === 'charset' && atRule.remove(),
      //       },
      //     },
      //   ],
      // },
    },
    plugins: [vue(), mockServe(command)],
  };
});
