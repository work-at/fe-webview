import { paths } from "@/constants/paths";
import { Navigate } from "react-router-dom";

const RootRoute = () => {
  return <Navigate to={paths.MAP.full} />;
};

export default RootRoute;
