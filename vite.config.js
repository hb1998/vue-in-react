import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import veauryVitePlugins from 'veaury/vite/index.js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    veauryVitePlugins({
      type: 'vue',
      // Configuration of @vitejs/plugin-vue
      // vueOptions: {...},
      // Configuration of @vitejs/plugin-react
      // reactOptions: {...}, 
      // Configuration of @vitejs/plugin-vue-jsx
      // vueJsxOptions: {...}
    })
  ],
})
