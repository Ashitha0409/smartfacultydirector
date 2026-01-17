// client/src/config.js
const isProduction = import.meta.env.PROD;

export const API_URL = isProduction
    ? ''  // On Vercel, use relative paths (e.g., /api/users)
    : 'http://localhost:5000'; // Locally, use the full server URL