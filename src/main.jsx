import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register/register.jsx";
import Dashboard from "./Dashboard/dashboard.jsx";
import Login from "./Login/login.jsx";
import Notfound from "./Notfound.jsx";
import Form from "./Form/form.jsx";
import App from "./App.jsx";
import QRcode from "./QRCode/qrcode.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <Notfound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <App><Dashboard /></App>, 
  },
  {
    path: "/form",
    element: <App><Form /></App>, 
  },
  {
    path : "/qrcode",
    element : <QRcode/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
