import { CoreAdmin } from 'ra-core';
import {
  Layout as DefaultLayout,
  Loading,
  Login,
  Logout,
  NotFound,
} from 'ra-ui-materialui3';

const Admin = CoreAdmin;

Admin.defaultProps = {
  appLayout: DefaultLayout,
  catchAll: NotFound,
  loading: Loading,
  loginPage: Login,
  logoutButton: Logout,
};

export default Admin;
