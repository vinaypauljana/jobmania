import { createBrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth/routes/index";

export const AllModuleRoutes = createBrowserRouter([...AuthRoutes]);
