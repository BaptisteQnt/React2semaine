import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import App from "./App";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePages";

const AdminPage = lazy(() => import("./pages/AdminPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "products",
    element: <ProductsPage />,
  },
  {
    path: "admin",
    element: (
      <Suspense
        fallback={
          <div className="text-center p-5 text-xl text-slate-900">
            Loading...
          </div>
        }
      >
        <AdminPage />
      </Suspense>
    ),
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
