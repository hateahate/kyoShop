import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import ProductPage from './pages/Product'
import Auth from './pages/Auth'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  PRODUCT_ROUTE, HOME_ROUTE,
} from './utils/consts'
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";

export const authRoutes = [

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
]
export const publicRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path:HOME_ROUTE,
    Component:HomePage
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    Component: ProductPage,
  },
]
