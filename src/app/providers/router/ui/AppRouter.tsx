import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '@/components/ui';
import { type RouteProps } from 'react-router-dom';
import { routeConfig } from '../config/routerConfig';

const AppRouter = (): JSX.Element => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<Loader />}>{route.component}</Suspense>
    );

    return <Route key={route.path} path={route.path} component={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
