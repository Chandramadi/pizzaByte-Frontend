import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layouts from './Layouts/Layouts';
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App;
