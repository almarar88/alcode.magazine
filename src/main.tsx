import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles.css';
import App from './app/App';
const el = document.getElementById('root')!;
// Prerendered pages are hydrated in place (keeps the server-painted hero/LCP); the 404 shell has no markup and renders fresh.
if (el.firstElementChild) hydrateRoot(el, <App />, { onRecoverableError: () => {} });
else createRoot(el).render(<App />);
