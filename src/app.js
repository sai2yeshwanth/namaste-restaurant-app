import React from "react";
import ReactDOM from "react-dom/client";
import { HeadingComponent } from "./components/HeaderComponent";
import { BodyComponet } from "./components/BodyComponet";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";

//Body componet
const ApplayOut = () => {
  return (
    <div className="app">
      {/* header */}
      <HeadingComponent />
      <Outlet/>
    </div>
  );
};

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <ApplayOut />,
    children: [
      {
        path: "/",
        element:<BodyComponet/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters} />);
