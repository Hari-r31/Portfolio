import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom' // ✅ import

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);

window.addEventListener("error", (event) => {
  console.error("🔥 Uncaught Error:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("🔥 Unhandled Promise Rejection:", event.reason);
});
