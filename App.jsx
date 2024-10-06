import React from "react";
import ReactDOM from "react-dom/client"; // Adjust the import for React 18
import {appRouter} from "./src/controller/FoodControl";
import { RouterProvider } from "react-router-dom";

const AppComponent = () => {
    return (
        <div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
