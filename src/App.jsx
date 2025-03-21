
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/auth/RequireAuth';
import AddProduct from './pages/admin/AddProduct';
import ProductSuccess from './pages/admin/ProductSuccess';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Cart from './pages/cart/CartDetails';
import Denied from './pages/Denied';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import Order from './pages/order/Order';
import OrderSuccess from './pages/order/OrderSuccess';
import Menu from './pages/products/Menu';
import ProductDetals from './pages/products/ProductDetails';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/signUp' element={<SignUp />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/menu' element={<Menu/>}/>

      {/* To only allow the loggedIn users to acesss the below routes */}
      <Route element={<RequireAuth/>}>
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order/>} />
        <Route path='/order/success' element={<OrderSuccess/>}/>

        {/* To only allow the admin users to acesss the below routes */}
        <Route path='/product/:productId' element={<ProductDetals />} />
        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path='/admin/addProduct/success' element={<ProductSuccess/>} />
      </Route>
      
      <Route path='/denied' element={<Denied />} />

      {/* The Router will match the requested route. If no match is found, the NotFound page will be rendered. */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;
