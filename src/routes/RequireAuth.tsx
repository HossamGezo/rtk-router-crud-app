// - - - - - - - - - - Libraries
import {Outlet, Navigate} from "react-router";

// - - - - - - - - - - Redux Files
import {useAppSelector} from "../app/hooks";

// - - - - - - - - - - RequireAuth (Main Component)
const RequireAuth = () => {
  // *** Redux Custom Hooks
  const {isLoggedIn} = useAppSelector((state) => state.auth);
  // *** Return Protected Route
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default RequireAuth;
