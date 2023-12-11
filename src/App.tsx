import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SessionsPage from "./pages/Sessions";
import SessionPage from "./pages/Session";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "sessions",
        element: <SessionsPage />,
      },
      {
        path: "sessions/:id",
        element: <SessionPage />,
      },
    ],
  },
]);

function App() {
  return (
  <RouterProvider router={router} />
  )
}

export default App;
