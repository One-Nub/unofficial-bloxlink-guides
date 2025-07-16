// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: "Unofficial Bloxlink Guides",
      customCss: ["./src/styles/custom.css", "@fontsource/poppins"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/One-Nub/unofficial-bloxlink-guides",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/jJKWpsr",
        },
      ],
      sidebar: [
        { slug: "landing" },
        {
          label: "Verification",
          autogenerate: { directory: "verification" },
        },
        {
          label: "Server Configuration",
          autogenerate: { directory: "server_management" },
        },
      ],
      lastUpdated: true,
    }),
  ],
});
