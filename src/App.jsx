import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home"
import SignUp from './Pages/Auth/SignUp';
import Login from './Pages/Auth/Login';
import NotFound from './Pages/NotFound';
import Denied from './Pages/Denied';
import AddProduct from './Pages/Admin/AddProduct';
import ProductDetals from './Pages/Products/ProductDetails';
import Cart from './Pages/Cart/CartDetails';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isLoggedInCheck, logoutAccount } from './Redux/Slices/authSlice';

function App() {

  // the below code checks if the user is logged in 
  // after the cookies expire.
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
      <Route path='/denied' element={<Denied />} />
      <Route path='/auth/signUp' element={<SignUp />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/admin/addProduct' element={<AddProduct />} />
      <Route path='/product/:productId' element={<ProductDetals />} />
      <Route path='/cart' element={<Cart />} />

      {/* The Router will match the requested route. If no match is found, the NotFound page will be rendered. */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;
