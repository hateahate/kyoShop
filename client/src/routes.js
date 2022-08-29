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
  PRODUCT_ROUTE, HOME_ROUTE, UI_KIT, ADMIN_ADD_PRODUCT, ADMIN_SEE_PRODUCTS, ADMIN_EDIT_PRODUCT, ADMIN_ADD_POST,
  ADMIN_EDIT_POST, ADMIN_SEE_POSTS, ADMIN_SEE_USERS, ADMIN_ADD_PRODUCT_CATEGORY,
} from './utils/consts'
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import Ui from './pages/Ui';
import AddProduct from './components/Admin/Pages/AddProduct/AddProduct'
import ProductListPage from './components/Admin/Pages/ProductsList/ProductListPage'
import EditProduct from './components/Admin/Pages/EditProduct/EditProduct'
import AddPost from './components/Admin/Pages/AddPost/AddPost'
import EditPost from './components/Admin/Pages/EditPost/EditPost'
import PostListPage from './components/Admin/Pages/PostList/PostListPage'
import UsersListPage from './components/Admin/Pages/UsersList/UsersListPage'
import AddProductCategory from './components/Admin/Pages/AddProductCategory/AddProductCategory'

export const authRoutes = [

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: ADMIN_ADD_PRODUCT,
    Component: AddProduct,
  },
  {
    path: ADMIN_SEE_PRODUCTS,
    Component: ProductListPage,
  },
  {
    path: ADMIN_EDIT_PRODUCT,
    Component: EditProduct,
  },
  {
    path: ADMIN_ADD_POST,
    Component: AddPost,
  },
  {
    path: ADMIN_EDIT_POST,
    Component: EditPost,
  },
  {
    path: ADMIN_SEE_POSTS,
    Component: PostListPage,
  },
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: ADMIN_SEE_USERS,
    Component: UsersListPage,
  },
  {
    path: ADMIN_ADD_PRODUCT_CATEGORY,
    Component: AddProductCategory,
  },
]
export const publicRoutes = [
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
]
