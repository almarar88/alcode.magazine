// Minimal browser globals so the client app can render once in Node at build time.
const store = new Map();
export function setRoute(pathname) {
  const url = new URL('http://prerender.local' + pathname);
  globalThis.location = { pathname: url.pathname, search: '', hash: '', origin: process.env.SITE_ORIGIN || '', href: url.href };
}
const el = () => ({ dataset: {}, style: { setProperty() {} }, classList: { add() {}, remove() {} }, setAttribute() {}, appendChild() {}, addEventListener() {}, removeEventListener() {} });
globalThis.window = globalThis;
globalThis.document = { documentElement: el(), body: el(), title: '', createElement: el, addEventListener() {}, removeEventListener() {}, querySelector: () => null, activeElement: null };
globalThis.localStorage = { getItem: k => store.get(k) ?? null, setItem: (k, v) => store.set(k, v), removeItem: k => store.delete(k) };
globalThis.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });
globalThis.addEventListener = () => {}; globalThis.removeEventListener = () => {}; globalThis.dispatchEvent = () => true;
globalThis.innerWidth = 1280; globalThis.scrollY = 0; globalThis.history = { pushState() {}, replaceState() {} };
globalThis.requestAnimationFrame = f => setTimeout(f, 0); globalThis.cancelAnimationFrame = clearTimeout;
setRoute('/');
