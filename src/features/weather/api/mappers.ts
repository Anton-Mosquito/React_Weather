// Thin adapter layer to centralize DTO -> domain transformations for the weather feature.
// For now, re-export existing mappers and add a small cleaner function used by RTK Query transformResponse.

export * from '../../../services/mappers';

// Basic transformer to clean 'dirty' API payloads before mapping.
// This is intentionally conservative and non-destructive; extend as needed.
export function cleanApiPayload<T extends Record<string, any>>(payload: T): T {
  if (!payload || typeof payload !== 'object') return payload;

  const cleaned: Record<string, any> = Array.isArray(payload)
    ? ([] as any)
    : ({} as any);

  Object.entries(payload).forEach(([key, value]) => {
    if (value === null || value === undefined) return;
    if (typeof value === 'string' && value.trim() === '') return;

    // Convert numeric strings to numbers when safe
    if (typeof value === 'string' && !Number.isNaN(Number(value))) {
      const num = Number(value);
      cleaned[key] = num;
      return;
    }

    // Recurse for nested objects
    if (typeof value === 'object') {
      cleaned[key] = cleanApiPayload(value as any);
      return;
    }

    cleaned[key] = value;
  });

  return cleaned as T;
}
