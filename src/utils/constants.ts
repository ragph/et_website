// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';
export const API_TIMEOUT = 30000;

// LocalStorage Keys
export const AUTH_STORAGE_KEY = 'auth';
export const THEME_STORAGE_KEY = 'theme';

// App Configuration
export const APP_NAME = 'TemplateReactTS_V1';
export const APP_VERSION = '1.0.0';

// Routes
export const ROUTES = {
  HOME: '/home',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  USERS_TABLE: '/tables/users',
  ANALYTICS: '/charts/analytics',
  UI_BUTTONS: '/ui-components/buttons',
  MAP: '/map',
} as const;

// Theme
export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;
