import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { FavoritePage } from "./pages/FavoritePage";

export const routes = {
  HOME: {
    path: "/",
  },
  PROFILE: {
    path: "/profile",
  },
  FAVORITE: {
    path: "/favorite",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout />,
    children: [
      {
        path: routes.HOME.path,
        element: <HomePage />,
      },
      {
        path: routes.PROFILE.path,
        element: <ProfilePage />,
      },
      {
        path: routes.FAVORITE.path,
        element: <FavoritePage />,
      },
    ],
  },
]);
