export enum AppRoutes {
  MAIN = 'main',
  // last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = (): string => '/';

export const AppRouterByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
};
