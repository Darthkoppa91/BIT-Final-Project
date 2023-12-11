import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "./context";

export function PrivateRoutes() {
  const { isLoggedIn } = useContext(appContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
