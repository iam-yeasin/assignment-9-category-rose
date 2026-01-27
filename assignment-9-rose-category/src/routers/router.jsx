import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ProfilePage from "../pages/profilePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPassword from "../pages/ForgotPassword";
import ServiceDetails from "../pages/ServiceDetails";

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
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
    ],
  },
]);
export default router;
