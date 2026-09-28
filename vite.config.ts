import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages builds set GITHUB_PAGES=1; the Lovable dev/preview build is unchanged.
const ghPages = process.env.GITHUB_PAGES === "1";
const BASE = "/radhikalohraportfolio";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // GitHub Pages is a static host: prerender every route under /radhikalohraportfolio/
    // so plain file hosting serves complete pages and refreshes work.
    ...(ghPages
      ? {
          router: { basepath: BASE },
          prerender: { enabled: true },
        }
      : {}),
  },
  // The prerendered public output is what GitHub Pages serves; the server bundle
  // that the default preset also produces is simply not uploaded.
  ...(ghPages ? { nitro: { prerender: { routes: [`${BASE}/`] } } } : {}),
  ...(ghPages ? { vite: { base: `${BASE}/` } } : {}),
});
