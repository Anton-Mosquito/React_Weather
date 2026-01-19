export default function legacy_requestCurrentWeather_removed() {
  throw new Error(
    'Legacy service removed: use RTK Query endpoints (src/store/services/weatherApi.service.ts)'
  );
}
