import { Navigate, Route, Routes } from 'react-router-dom';
import CommonTemplate from '../Components/CommonTemplate/CommonTemplate';
import HomePage from '../Pages/HomePage';
import CabinetPage from '../Pages/CabinetPage/CabinetPage';
import AllProductsPage from '../Pages/AllProductsPage/AllProductsPage';
import ProductPage from '../Pages/ProductPage';
import SingUpPage from '../Pages/SingUpPage';
import SignInPage from '../Pages/SignInPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Cartpage from '../Pages/Cartpage';
import Auth0Verify from '../api/Auth0Verify';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CommonTemplate />} >
        <Route element={<PrivateRoute />}>
          <Route path="cabinet" element={<CabinetPage />} />
          <Route path="cart" element={<Cartpage />} />
        </Route>
        <Route element={<PublicRoute />}>

          <Route path="sign-up" element={<SingUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
        </Route>

        <Route index element={<HomePage />} />
        <Route path="products/:category" element={<AllProductsPage />} />
        <Route path="products/:category/:productId" element={<ProductPage />} />

      </Route>

      <Route path='/auth0-verify' element={<Auth0Verify />} />
      <Route path='*' element={<Navigate to='/sign-up' />} />
    </Routes>
  );
}

export default MainRoutes;