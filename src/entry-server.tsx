// Build-time prerender entry: renders App for one route to static HTML (waits for lazy routes).
import { prerenderToNodeStream } from 'react-dom/static';
import App from './app/App';
export async function render() {
  const { prelude } = await prerenderToNodeStream(<App />);
  let html = ''; for await (const c of prelude) html += c; return html;
}
