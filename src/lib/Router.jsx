import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/ui/Layout.jsx";
import App from "../App";
import ServiceDetail from "../components/pages/ServiceDetail";
import Reta from "../components/pages/Reta";
// import NotFound from '../components/pages/NotFoundPage';

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <App /> },
        { path: "/servicio/:id", element: <ServiceDetail /> },
        { path: "/retatur", element: <Reta /> },
        // { path: "*", element: <NotFound /> }
      ],
    },
  ],
  { basename: "/" }
);
