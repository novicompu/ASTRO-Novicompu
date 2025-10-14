// Configuración de cliente para consumir el backend
// Usa variable pública (expuesta al navegador) definida en .env: PUBLIC_API_BASE
// Fallback a URL local proporcionada por el usuario si no está presente.

export const API_BASE = import.meta.env.PUBLIC_API_BASE?.replace(/\/?$/, '') || 'http://10.0.2.2:8004';

// Rutas reales según el montaje en backend:
// En backend: app.use("/api/profile", profileRoutes) y dentro router.post("/request-account-deletion")
// Por lo tanto el endpoint final es: /api/profile/request-account-deletion
export const ENDPOINTS = {
  requestAccountDeletion: `${API_BASE}/api/profile/request-account-deletion`,
};
