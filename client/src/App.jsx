import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import TaskPage from "./pages/TaskPage"
import ProfilePage from "./pages/ProfilePage"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./ProtectedRoute"
import { TaskProvider } from "./context/TaskContext"
import Splash from "./pages/Splash"
import { ProductProvider } from "./context/ProductContext"
import ShoppinPage from "./pages/Shopping"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path="/tasks" element={<TaskPage/>}/>
              <Route path="/shopping" element={<ShoppinPage/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
            </Route>
          </Routes>
          </BrowserRouter>
        </CartProvider> 
      </ProductProvider>
      </TaskProvider>
    </AuthProvider> 
  )
}

export default App
