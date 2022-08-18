import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import { checkUserSession } from './store/user/user.action';
import Spinner from './components/spinner/spinner';

const Home = lazy(() => import('./routes/home/home'))
const Authentication = lazy(() => import('./routes/authentication/authentication'))
const Navigation = lazy(() => import('./routes/navigation/Navigation'))
const Shop = lazy(() => import('./routes/shop/shop'))
const Checkout = lazy(() => import('./routes/checkout/Checkout'))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
