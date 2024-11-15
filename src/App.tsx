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
