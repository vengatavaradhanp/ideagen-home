import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Navigate,
} from "react-router-dom";
import DataTable from "../../pages/DataTable";
import Home from "../../pages/Home";
import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ErrorPage from "../ErrorBoundary/ErrorPage";
import Form from "../../pages/DataTable/Form";
import ProtectedRoute from "./ProtectedRoute";
import ComingSoon from "../ErrorBoundary/ComingSoon";
import Chart from "../../pages/Analysis";
import Analysis from "../../pages/Analysis";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary fallback={<ErrorPage />}>
        <ProtectedRoute isLoggedIn>
          <Home />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "/data-table",
    element: (
      <ErrorBoundary fallback={<ErrorPage />}>
        <ProtectedRoute isLoggedIn>
          <DataTable />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "/form",
    element: (
      <ErrorBoundary fallback={<ErrorPage />}>
        <ProtectedRoute isLoggedIn>
          <Form />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "/analysis",
    element: (
      <ErrorBoundary fallback={<ErrorPage />}>
        <ProtectedRoute isLoggedIn>
          <Analysis/>
        </ProtectedRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "/error",
    element: (
      <ErrorBoundary fallback={<ErrorPage />}>
        <ErrorPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/coming-soon",
    element: (
      <ErrorBoundary fallback={<ErrorPage />}>
        <ComingSoon />
      </ErrorBoundary>
    ),
  },
  
  {
    path: "*",
    element: (
      <ErrorBoundary fallback={<ErrorPage />}>
        <Navigate to="/coming-soon" />
      </ErrorBoundary>
    ),
  },
  
]);

export default function Router() {
  return (
    <React.Suspense>
      <RouterProvider router={router} fallbackElement={<h2>No...</h2>} />
    </React.Suspense>
  );
}
