import { PATH } from "@/constants/paths";
import { Navigate } from "react-router-dom";

const RootRoute = () => {
  return <Navigate to={PATH.MAP.full} />;
};

export default RootRoute;
