import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './common/Login.jsx'
import Register from './common/Register.jsx'
import ForgotPassword from './common/ForgotPassword.jsx'
import FindDoctor from './pages/FindDoctor.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
<Routes>
<Route path="/" element={<App/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/forgot-password" element={<ForgotPassword/>} />
<Route path='/find-doctors' element={<FindDoctor/>} />
<Route path="*" element={<NotFound/>} />

</Routes>
  </BrowserRouter>
  // </StrictMode>,
)
