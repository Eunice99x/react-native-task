// App configuration constants for MVP

export const APP_CONFIG = {
  // App Information
  name: "React Native Boilerplate",
  version: "1.0.0",
  description: "A comprehensive React Native boilerplate for MVP development",

  // API Configuration
  api: {
    baseUrl: __DEV__ ? "http://localhost:3000/api" : "https://api.yourapp.com",
    timeout: 10000,
    retryAttempts: 3
  },

  // Feature Flags
  features: {
    analytics: true,
    crashReporting: true,
    pushNotifications: true,
    socialLogin: false, // Disabled for MVP
    inAppPurchases: false, // Disabled for MVP
    offline: true
  },

  // UI Configuration
  ui: {
    animationDuration: 300,
    tabBarHeight: 65,
    headerHeight: 60,
    borderRadius: 12
  },

  // Authentication
  auth: {
    sessionTimeout: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000 // 15 minutes in milliseconds
  },

  // Storage Keys
  storage: {
    authToken: "@auth_token",
    userPreferences: "@user_preferences",
    appState: "@app_state"
  },

  // Pagination
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 100
  },

  // Search
  search: {
    debounceMs: 300,
    minQueryLength: 2,
    maxResults: 50
  },

  // Cache
  cache: {
    ttl: 5 * 60 * 1000, // 5 minutes in milliseconds
    maxSize: 100 // Maximum number of cached items
  },

  // Error Reporting
  errorReporting: {
    maxErrorsPerSession: 10,
    excludeDevErrors: true
  },

  // Development
  development: {
    enableLogging: __DEV__,
    enableDebugMode: __DEV__,
    mockApiDelay: 1000
  }
} as const;

// Environment-specific overrides
export const getEnvironmentConfig = () => {
  if (__DEV__) {
    return {
      ...APP_CONFIG,
      api: {
        ...APP_CONFIG.api,
        baseUrl: "http://localhost:3000/api"
      },
      development: {
        ...APP_CONFIG.development,
        enableLogging: true,
        enableDebugMode: true
      }
    };
  }

  return APP_CONFIG;
};

// Export the active configuration
export const config = getEnvironmentConfig();

// Type exports for TypeScript
export type AppConfig = typeof APP_CONFIG;
