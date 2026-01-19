// Re-export existing API DTO types to prepare migration to feature-local types
export * from '../../../types/api/openWeather';
export * from '../../../types/api/legacyEndpoints';

// Note: Later we will extract and refine the DTO shapes here and remove cross-file re-exports.
