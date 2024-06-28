import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAuthContext } from "./contexts/Auth/useAuthContext";

const notLoggedInRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function Router() {
  const { userIsAuthenticated } = useAuthContext();

  return <RouterProvider router={userIsAuthenticated ? router : notLoggedInRoute} />;
}
