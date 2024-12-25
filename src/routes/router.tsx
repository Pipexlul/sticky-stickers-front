import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout.tsx";

import HomePage from "../pages/Home";
import OrderPage from "../pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
    ],
  },
]);

export default router;
