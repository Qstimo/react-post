import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { privateRouters, publickRouters } from './Routes';
import { AuthContext } from '../Component/context/AuthContext';
import Loader from '../Component/Ui/Loader/Loader';

function AppRouter() {
  const { isAuth, isLoading } = React.useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRouters.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publickRouters.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
}

export default AppRouter;
