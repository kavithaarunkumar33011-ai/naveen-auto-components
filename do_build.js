import { build } from 'vite';
import react from '@vitejs/plugin-react';

console.log('Starting custom Vite build...');
await build({
  configFile: false,
  root: 'Z:/',
  plugins: [react()],
  build: {
    outDir: 'Z:/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'Z:/index.html'
    }
  }
});
console.log('Build completed successfully!');
