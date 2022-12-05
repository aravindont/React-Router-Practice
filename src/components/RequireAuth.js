import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function RequireAuth({ children }) {
  const auth = useAuth();
  const navigate = useNavigate();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return <div>children</div>;
}
export default RequireAuth;
