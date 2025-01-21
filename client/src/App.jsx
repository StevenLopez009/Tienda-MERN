import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login/LoginPage.jsx"
import RegisterPage from "./pages/register/RegisterPage.jsx"
import TaskPage from "./pages/mainPage/TaskPage.jsx"
import ProfilePage from "./pages/profile/ProfilePage.jsx"
import { AuthProvider } from "./service/Auth.service.jsx"
import ProtectedRoute from "./ProtectedRoute"
import Splash from "./pages/initPage/Splash.jsx"
import { ProductProvider } from "./service/Product.service.jsx"
import ShoppinPage from "./pages/shopCar/Shopping.jsx"
import { CartProvider } from "./service/Cart.service.jsx"
import FavoritePage from "./pages/favorites/FavoritePage.jsx"
import PaymentMethodsPage from "./pages/paymentMethods/Payment.jsx"

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/shopping" element={<ShoppinPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/payment" element={<PaymentMethodsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
