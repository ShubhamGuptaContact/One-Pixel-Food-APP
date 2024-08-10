import Header from '../view/Header.js';
import Container from '../view/Container.js';

import { createBrowserRouter, Outlet, useParams } from 'react-router-dom';
import { Rests } from '../view/Rests.js';
import About from '../view/About.js';


export const FoodControl = () => {

    const data = useParams();
    console.log(data);
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
            }, {
                path: '/contact',
                element: <div>Contact Us Page</div>
            }, {
                path: '/rests/:resId',
                element: <Rests />
            }
        ]
    }
]);


