// Reference: https://github.com/withastro/starlight/discussions/966

/** The site’s `base` URL with any trailing slash removed. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a local link with the currently configured `base` URL. */
export function withBase(href: string): string {
  return base + href;
}
