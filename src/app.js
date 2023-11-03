import React from "react";
import ReactDOM from "react-dom/client";
import { HeadingComponent } from "./components/HeaderComponent";
import { BodyComponet } from "./components/BodyComponet";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorComponent from "./components/ErrorComponent"

//Body componet
const ApplayOut = () => {
  return (
    <div className="app">
      {/* header */}
      <HeadingComponent />
      {/* Body */}
      <BodyComponet />
      {/* footer */}
    </div>
  );
};

const appRouters = createBrowserRouter([
  {
    path : "/",
    element : <ApplayOut/>,
    errorElement: <ErrorComponent/>

  },
  {
    path : "/about",
    element : <About/>
  },
  {
    path : "/contact",
    element : <Contact/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters}/>)
