import React from "react";
import ReactDOM from "react-dom"; // Adjust the import for React 18

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

const styleCard = {
    backgroundColor:"#f6f0f0"
}
const Foodcard = (props) => {
    return (
        <div className="food-card">
            <div className="img">
            <img src="https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
" alt="img" />
            </div>
            <h3>Name: {props?.name}</h3>
            <h3>Rate: {props?.rating}</h3>
        </div>
    )
}

const Container = () => {
    return (
        <div className="Food-container">
            <div className="gloabal-search">Search</div>
            <div className="food-con">
                <Foodcard  name="DP Foods" rating="3.4"/>
                <Foodcard name="SP" rating="3.4"/>
                <Foodcard name="DK" rating="3.4"/>
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
root.render(<AppComponent />);
