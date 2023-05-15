import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
 plugins: [react()],
 //define: { // needed when working on localhost
 //global: {},},

});
