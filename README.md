A various assortment of guides for the discord bot Bloxlink.

Runs on Github Pages, using Astro + Starlight <br/>
Uses plugins:

- [starlight-image-zoom](https://github.com/HiDeoo/starlight-image-zoom)
- [astro-embed](https://github.com/delucis/astro-embed)

Also uses a git hook to scrub EXIF data from images. This is located under the [.git-hooks](/.git-hooks) directory. <br>
Requires [exiftool](https://exiftool.org/) to be installed & the `git config core.hooksPath .git-hooks` setting to be set. <br>
This moves the hooks path from inside `.git` to a root-level `.git-hooks` folder in the repo.

## [![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

---
