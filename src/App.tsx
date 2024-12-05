import React, { useEffect } from "react";
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
import Loading from "./components/Loading";

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
    element: <ProtectedRoutes>{<MainLayout />}</ProtectedRoutes>,
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
        element: (
          <AdminRoute>
            <Restaurant></Restaurant>
          </AdminRoute>
        ),
      },
      {
        path: "admin/menu",
        element: (
          <AdminRoute>
            <AddMenu />
          </AdminRoute>
        ),
      },
      {
        path: "admin/orders",
        element: (
          <AdminRoute>
            <Orders />
          </AdminRoute>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: (
      <AuthenticatedUser>
        <Login />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthenticatedUser>
        <SignUp />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AuthenticatedUser>
        <ForgotPassword />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail></VerifyEmail>,
  },
]);

const App = () => {
  const { checkAuthentication, isCheckingAuth } = useUserStore();

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  if (isCheckingAuth) return <Loading />;
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;
