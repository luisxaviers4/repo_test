/// <reference types="vitest" />
 import {  defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react() ],
  resolve: {
    mainFields: ['browser', 'module', 'jsnext:main', 'jsnext']
  },
  test: {
  
     setupFiles: ['./vitest.setup.ts'],
    globals: true,
    environment: 'happy-dom',
    // environment: 'node',
    // Transpile dependencies if necessary
   
    alias: [{ find: /^@ant-design\/plots$/, replacement: '@ant-design/plots/es/index.js' },
      { find: /^@antv\/g2-extension-plot$/, replacement: '@antv/g2-extension-plot/esm/index.js' },
      // { find: /^@antv\/g2$/, replacement: '@antv/g2/esm/runtime/src/runtime/mark.js.map' },
      { find: /^d3\/src$/, replacement: 'd3/esm/d3.js' },

    ],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['./src/main.tsx', '**/src/context/MeteorologicalContext.tsx',
        '**/src/context/OperationalInsightContext.tsx',
        "**/src/screens/Insights/**",
        "**/src/components/InsightComponent/InsightComponent.tsx"
       ]
    },
    deps: {
      moduleDirectories: [],
      inline: ['vitest-canvas-mock', 'react-gauge-component', 'd3'],
    },
   },
})
