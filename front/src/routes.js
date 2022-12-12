import { Layout } from "./components/layout";
import Testimonials from "./pages/manage/Testimonials";
import Forms from "./pages/collect/Forms";
import ImportTest from "./pages/collect/ImportTest";
import Search from "./pages/manage/Search";
import Wall from "./pages/share/Wall";
import Widgets from "./pages/share/Widgets";
import CreateWidget from "./pages/share/Widgets/createWidget";
import Login from "./pages/sign/Login";
import Register from "./pages/sign/Register";
import Profile from "./pages/sign/Profile";
import NewForm from "./pages/newForm/newForm";
import FormView from "./pages/newForm/formView";
import React from "react";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
      {
        path: "/widgets",
        element: <Widgets />,
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
  {
    path: "/widgets/0954e718-4c50-44ed-af17-92dda61edae3",
    element: <CreateWidget />,
  },
  {
    path: "/forms/:id",
    element: <NewForm />,
  },
  {
    path: "/forms/p/:id/r/:id",
    element: <FormView />,
  },
];
