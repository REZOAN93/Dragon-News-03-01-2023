import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";
import Leftsidenave from "../../Pages/Shared/Leftsidenave/Leftsidenave";
import NewsDetails from "../../Pages/Shared/NewsDetails/NewsDetails";
import Rightsidenave from "../../Pages/Shared/Rightsidenave/Rightsidenave";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/categories/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/"),
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
