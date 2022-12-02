import { Navigate } from "react-router-dom";
import { Layout } from "./components/layout";
import Testimonials from "./pages/manage/Testimonials";
import Forms from "./pages/collect/Forms";
import ImportTest from "./pages/collect/ImportTest";
import Search from "./pages/manage/Search";
import Wall from "./pages/share/Wall";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/testimonials" />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/forms",
        element: <Forms />,
      },
    ],
  },
  {
    path: "/import",
    element: <ImportTest />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/wall",
    element: <Wall />,
  },
];
