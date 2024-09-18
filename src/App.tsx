import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import MovieDetails from "./pages/MovieDetails";
import SerieDetails from "./pages/SerieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/movies",
    element: (
      <Layout>
        <Movies />
      </Layout>
    ),
  },
  {
    path: "/series",
    element: (
      <Layout>
        <Series />
      </Layout>
    ),
  },
  {
    path: "/movies/:id",
    element: (
      <Layout>
        <MovieDetails />
      </Layout>
    ),
  },
  {
    path: "/series/:id",
    element: (
      <Layout>
        <SerieDetails />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
