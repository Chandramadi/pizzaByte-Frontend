import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home"
import SignUp from './Pages/Auth/SignUp';
import Login from './Pages/Auth/Login';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/signUp' element={<SignUp />} />
      <Route path='/auth/login' element={<Login />} />

      {/* The Router will match the requested route. If no match is found, the NotFound page will be rendered. */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;
