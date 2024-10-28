import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage, AboutUsPage, ArticlesPage, RecipesPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/recipes", element: <RecipesPage /> },
      { path: "/articles", element: <ArticlesPage /> },
      { path: "/about", element: <AboutUsPage /> },
    ],
  },
]);
