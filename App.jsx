import React from "react";
import ReactDOM from "react-dom/client"; // Adjust the import for React 18
import FoodControl from "./src/controller/FoodControl";


const AppComponent = () => {
    return (
        <div>
            <FoodControl />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
