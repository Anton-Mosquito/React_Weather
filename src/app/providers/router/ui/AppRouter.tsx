import { Suspense, memo, type ReactElement } from 'react';
import { useRoutes, type RouteObject } from 'react-router-dom';
import { Loader } from '@/components/ui';
import { routeConfig } from '../config/routerConfig';

const AppRouter = (): ReactElement | null => {
  const routes: RouteObject[] = Object.values(routeConfig).map((route) => {
    return {
      path: route.path,
      element: <Suspense fallback={<Loader />}>{route.element}</Suspense>,
    };
  });

  return useRoutes(routes);
};

export default memo(AppRouter);
