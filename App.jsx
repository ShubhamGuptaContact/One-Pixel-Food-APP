import React from "react";
import ReactDOM from "react-dom/client"; // Adjust the import for React 18

const Header = () => {
    return (
        <div className="header">
            <div className="logo-image">
                <h1>FOA</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Foodcard = () => {
    return (
        <div className="food-card1">
            <h3>Name  : Baba </h3>
        </div>
    )
}

const Container = () => {
    return (
        <div className="Food-container">
            <div className="gloabal-search">Search</div>
            <div className="food-card">
                <Foodcard/>
            </div>
        </div>
    )
}
const AppComponent = () => {
    return (
        <div className="app">
            <Header />
            <Container/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />); // Use JSX syntax to render the component
