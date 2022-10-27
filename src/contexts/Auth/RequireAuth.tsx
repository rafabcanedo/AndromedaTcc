import { useContext } from "react";
import Login from "../../components/pages/Login/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
 const auth = useContext(AuthContext);

 if (!auth.user) {
  return <Login />;
 }

 return children;
}