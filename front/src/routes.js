import { Layout } from "./components/layout";
import Testimonials from "./pages/manage/Testimonials";
import Forms from "./pages/collect/Forms";
import ImportTest from "./pages/collect/ImportTest";
import Search from "./pages/manage/Search";
import WallDesign from "./pages/share/WallDesign";
import Walls from "./pages/share/Walls";
import Widgets from "./pages/share/Widgets";
import WallView from "./pages/share/WallView";
import CreateWidget from "./pages/share/Widgets/createWidget";
import WidgetView from "./pages/share/Widgets/WidgetView";
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
      {
        path: "/walls",
        element: <Walls />,
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
    path: "/walls/:id",
    element: <WallDesign />,
  },
  {
    path: "/testimonialforms/:id",
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
  {
    path: "/widgets/p/:id",
    element: <WidgetView />,
  },
  {
    path: "/walls/p/1/testimonials/:id",
    element: <WallView />,
  },
];
