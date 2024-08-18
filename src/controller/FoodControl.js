import Header from '../view/Header.js';
import Container from '../view/Container.js';
import Footer from '../view/Footer.js';
import { createBrowserRouter, Link, Outlet, useParams } from 'react-router-dom';
import { Rests } from '../view/Rests.js';
import About from '../view/About.js';
import Header from './../view/Header';
import UserContext from "../context/UserContext.js";
import {Provider} from 'react-redux';
import foodStore from '../Redux/foodStore';
import Cart from '../view/Cart.js';

export const FoodControl = () => {

    const data = useParams();
    // console.log(data);
    const userName = "Shubham "
    return (
        
        <div className="app">
            <Provider store={foodStore}>
            <Header />
            <Outlet />
            <UserContext.Provider value={{LoggedInUser:userName}}>
            <Footer />
            </UserContext.Provider>
            </Provider>
        </div>
    )
}

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <FoodControl />,
        children: [
            // Add routes here
            {
                path: '/',
                element: <Container />
            }, {
                path: '/about',
                element: <About />
            },{
            }, {
                path: '/cart',
                element: <Cart />
            },{
                path: '/rests/:resId',
                element: <Rests />
            }
        ],
        errorElement: (

            <div>
                <Header />
                <div className="comingsoon">
                    <h1>Coming Soon ..............</h1>
                    <h2><a href="/">😅</a></h2>
                </div>
            </div>
    )
    }
]);


