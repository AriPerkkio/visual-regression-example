/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { chromaticPlugin } from "@chromatic-com/vitest/plugin";

export default defineConfig({
  plugins: [react(), tailwindcss(), chromaticPlugin()],

  resolve: {
    tsconfigPaths: true,
  },

  optimizeDeps: {
    force: true,
    include: ["react-dom/client"],
  },

  server: {
    fs: { strict: false },
  },
  test: {
    setupFiles: ["./test/setup.ts"],
    browser: {
      enabled: true,
      headless: true,
      screenshotFailures: false,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
    },
  },
});
