import Main from '@features/weather/components/Main';
import ErrorPage from '@/components/layouts';
import { AppRoutes, getRouteMain } from '@/shared/const/router';
import { type RouteProps } from 'react-router-dom';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    component: Main,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    component: ErrorPage,
  },
};
