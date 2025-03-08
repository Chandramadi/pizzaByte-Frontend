import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home"
import SignUp from './Pages/Auth/SignUp';
import Login from './Pages/Auth/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth/signUp' element={<SignUp/>} />
      <Route path='/auth/login' element={<Login/>} />
    </Routes>
  )
}

export default App;
