import React from "react";
import { Button } from "./components/ui/button";
import Login from "./auth/login";
import {
  createBrowserRouter,
  Navigate,
  BrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SignUp from "./auth/SignUp";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import Navbar from "./components/Navbar";
import HereSection from "./components/HeroSection";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";
import Restaurant from "./admin/Restaurant";
import AddMenu from "./admin/Admenu";
import Orders from "./admin/Orders";
import Success from "./components/Success";
import { useUserStore } from "./store/useUserStore";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

const AuthenticatedUser = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!user?.admin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HereSection></HereSection>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/search/:text",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail></RestaurantDetail>,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/order/status",
        element: <Success></Success>,
      },
      /* admin */
      {
        path: "admin/restaurant/",
        element: <Restaurant></Restaurant>,
      },
      {
        path: "admin/menu",
        element: <AddMenu></AddMenu>,
      },
      {
        path: "admin/orders",
        element: <Orders></Orders>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail></VerifyEmail>,
  },
]);

const App = () => {
  return (
    <div>
      <main>
        <RouterProvider router={appRouter}></RouterProvider>
      </main>
    </div>
  );
};

export default App;
