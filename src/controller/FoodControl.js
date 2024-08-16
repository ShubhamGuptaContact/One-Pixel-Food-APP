import Header from '../view/Header.js';
import Container from '../view/Container.js';

import { createBrowserRouter, Link, Outlet, useParams } from 'react-router-dom';
import { Rests } from '../view/Rests.js';
import About from '../view/About.js';
import Header from './../view/Header';


export const FoodControl = () => {

    const data = useParams();
    // console.log(data);
    return (
        <div className="app">
            <Header />
            <Outlet />
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


