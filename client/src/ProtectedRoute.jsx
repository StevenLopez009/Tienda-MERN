import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./service/Auth.service.jsx";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>; 
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;