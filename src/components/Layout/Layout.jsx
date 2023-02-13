import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';
import { AppBarMenu } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <main className={css.container}>
      <AppBarMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};
