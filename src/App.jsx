import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/Admin/AddProduct';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import Cart from './Pages/Cart/CartDetails';
import Denied from './Pages/Denied';
import Home from "./pages/Home";
import NotFound from './Pages/NotFound';
import Order from './Pages/Order/Order';
import ProductDetals from './Pages/Products/ProductDetails';
import { isLoggedInCheck, logoutAccount } from './Redux/Slices/AuthSlice';
import OrderSuccess from './Pages/Order/OrderSuccess';
import RequireAuth from './Components/Auth/RequireAuth';

function App() {

  // the below code checks if the user is logged in 
  // if the user visits after few days and the cookies have expired.
  // syncing cookies with localStorage.
  const dispatch = useDispatch();

  async function check() {
    const response = await dispatch(isLoggedInCheck());
    if(response?.payload?.status===401 || response?.payload?.status===400) {
      dispatch(logoutAccount());
    }
  }

  useEffect(() => {
    check();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/signUp' element={<SignUp />} />
      <Route path='/auth/login' element={<Login />} />

      {/* To only allow the loggedIn users to acesss the below routes */}
      <Route element={<RequireAuth/>}>
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order/>} />
        <Route path='/order/success' element={<OrderSuccess/>}/>
      </Route>
      
      {/* To only allow the admin users to acesss the below routes */}
      <Route path='/product/:productId' element={<ProductDetals />} />
      <Route path='/admin/addProduct' element={<AddProduct />} />

      <Route path='/denied' element={<Denied />} />

      {/* The Router will match the requested route. If no match is found, the NotFound page will be rendered. */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;
