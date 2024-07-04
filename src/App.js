import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout/ClientLayout";
import { ROUTE_PATH } from "./constants/route";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import EnterpriseProfile from "./pages/EnterpriseProfile/EnterpriseProfile";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <ClientLayout />,
      children: [
        {
          path: ROUTE_PATH.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTE_PATH.SIGN_UP,
          element: <SignUpPage />,
        },
        {
          path: ROUTE_PATH.SIGN_IN,
          element: <SignInPage />,
        },
        {
          path: ROUTE_PATH.MY_PROFILE,
          element: <MyProfilePage />,
        },
        {
          path: ROUTE_PATH.ENTERPRISE_PROFILE,
          element: <EnterpriseProfile />,
        },
        {
          path: ROUTE_PATH.EVENT_DETAIL(":eventId"),
          element: <EventDetailPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
