// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Unofficial Bloxlink Guides",
      customCss: ["./src/styles/custom.css", "@fontsource/poppins"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
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
    }),
  ],
});
