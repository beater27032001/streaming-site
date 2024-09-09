import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
