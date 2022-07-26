import AdminPage from './pages/AdminPage'
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
  PRODUCT_ROUTE, HOME_ROUTE, UI_KIT, ADMIN_ADD_PRODUCT, ADMIN_SEE_PRODUCTS,
} from './utils/consts'
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import Ui from './pages/Ui';
import AddProduct from './components/Admin/Pages/AddProduct/AddProduct'
import ProductListPage from './components/Admin/Pages/ProductsList/ProductListPage'

export const authRoutes = [

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
]
export const publicRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: HOME_ROUTE,
    Component: HomePage
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
  {
    path: UI_KIT,
    Component: Ui,
  },
  {
    path: ADMIN_ADD_PRODUCT,
    Component: AddProduct,
  },
  {
    path: ADMIN_SEE_PRODUCTS,
    Component: ProductListPage,
  },
]
