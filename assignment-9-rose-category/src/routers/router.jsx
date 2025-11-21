import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ProfilePage from "../pages/profilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
export default router;
