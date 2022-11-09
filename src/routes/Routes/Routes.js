import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import UnAuthorized from "../../pages/ErrorPage/UnAuthorized";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services/Services";
import AddService from "../../pages/UserActivities/AddService/AddService";
import UpdateReview from "../../pages/UserActivities/UpdateReview/UpdateReview";
import UserProfile from "../../pages/UserActivities/UserProfile/UserProfile";
import UserReview from "../../pages/UserActivities/UserReview/UserReview";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch(`http://localhost:5000/services`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/Portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <UserReview></UserReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/unauthorized",
        element: <UnAuthorized></UnAuthorized>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
