import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://cerulean-longma-4df748.netlify.app",
  integrations: [preact()],
});