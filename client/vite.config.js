import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {  // Use 'server' instead of 'serve'
    proxy: {  // Use 'proxy' instead of 'Proxy'
      '/api': {
        target: 'http://localhost:3000',  // Your backend server URL
        secure: false,  // Use a boolean, not a string for 'secure'
        changeOrigin: true,  // This ensures the host header matches the target
      },
    },
  },
  plugins: [react()],

})
