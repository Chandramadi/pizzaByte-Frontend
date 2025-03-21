import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { setupInterceptors } from './helpers/setupInterceptors';

setupInterceptors(store); // handles logout if the token expires

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster /> {/* Adds react-toast in the entire application */}
    </BrowserRouter>
  </Provider>

)
