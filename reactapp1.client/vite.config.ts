import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [plugin()],
    server: {
        proxy: {
            '^/api': {
                target: 'https://localhost:7000', // Asegúrate de que este sea el puerto de tu Backend
                secure: false
            }
        },
        port: 5173
    }
})