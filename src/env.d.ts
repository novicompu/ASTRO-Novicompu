/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Variables de entorno públicas usadas en el cliente (prefijo PUBLIC_ obligatorio)
interface ImportMetaEnv {
	readonly PUBLIC_API_BASE?: string; // Ej: "https://api.midominio.com" o "http://10.0.2.2:8004"
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
