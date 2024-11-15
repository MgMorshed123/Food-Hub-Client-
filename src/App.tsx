import React from "react";
import { Button } from "./components/ui/button";
import Login from "./auth/login";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SignUp from "./auth/SignUp";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // children : [
    //   {
    //     path : '/login',
    //     element :<Login></Login>
    //   }
    // ]
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
