import React from "react";
import { RouterProvider } from "react-router-dom";
import { AllModuleRoutes } from "./modules/AllModulesRoutes";

class EntryPoint extends React.Component {
  render() {
    return (
      <>
        <RouterProvider router={AllModuleRoutes} />
      </>
    );
  }
}

export default EntryPoint;
