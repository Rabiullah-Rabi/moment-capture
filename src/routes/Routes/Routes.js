import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Register from "../../pages/Register/Register";
import Services from "../../pages/Services/Services/Services";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/Portfolio',
                element:<Portfolio></Portfolio>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
])