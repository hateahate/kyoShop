import AdminPage from '../pages/AdminPage'
import Basket from '../pages/Basket'
import Shop from '../pages/Shop'
import ProductPage from '../pages/Product'
import Auth from '../pages/Auth'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  PRODUCT_ROUTE, HOME_ROUTE, UI_KIT, ADMIN_ADD_PRODUCT, ADMIN_SEE_PRODUCTS, ADMIN_EDIT_PRODUCT, ADMIN_ADD_POST,
  ADMIN_EDIT_POST, ADMIN_SEE_POSTS, ADMIN_SEE_USERS, ADMIN_ADD_PRODUCT_CATEGORY, ADMIN_EDIT_USER, ADMIN_ADD_USER, MY_ACCOUNT, ADMIN_ADD_WIKI, ADMIN_EDIT_WIKI, ADMIN_SEE_WIKI,
} from './consts'
import HomePage from "../pages/HomePage";
import Registration from "../pages/Registration";
import Ui from '../pages/Ui';
import AddProduct from '../components/Admin/Pages/AddProduct/AddProduct'
import ProductListPage from '../components/Admin/Pages/ProductsList/ProductListPage'
import EditProduct from '../components/Admin/Pages/EditProduct/EditProduct'
import AddPost from '../components/Admin/Pages/AddPost/AddPost'
import EditPost from '../components/Admin/Pages/EditPost/EditPost'
import PostListPage from '../components/Admin/Pages/PostList/PostListPage'
import UsersListPage from '../components/Admin/Pages/UsersList/UsersListPage'
import AddProductCategory from '../components/Admin/Pages/ProductCategory/ProductCategory'
import EditUser from '../components/Admin/Pages/EditUser/EditUser'
import AddUser from '../components/Admin/Pages/AddUser/AddUser'
import MyAccount from '../pages/MyAccount'
import AddWiki from '../components/Admin/Pages/AddWiki/AddWiki'
import EditWiki from '../components/Admin/Pages/EditWiki/EditWiki'
import WikiListPage from '../components/Admin/Pages/WikiList/WikiListPage'

// Administrator routes
export const adminRoutes = [
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
  {
    path: ADMIN_EDIT_USER,
    Component: EditUser,
  },
  {
    path: ADMIN_ADD_USER,
    Component: AddUser,
  },
  {
    path: ADMIN_ADD_WIKI,
    Component: AddWiki,
  },
  {
    path: ADMIN_EDIT_WIKI,
    Component: EditWiki,
  },
  {
    path: ADMIN_SEE_WIKI,
    Component: WikiListPage,
  },
]
// Authorized user routes
export const authRoutes = [
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: MY_ACCOUNT,
    Component: MyAccount,
  },
]
// Routes with public visibiliy
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