import Home from "../pages/Home";
import ErrorPage from "../pages/error-page";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import App from "../App";
import Projects from "../pages/Projects";
import About from "../pages/About";

// make index checking for protection and returning route list based on check
// check if logged in:
//   true = return auth Routes
//   false = return nonauth routes

const AllRoutes = [
  {
    path: "/",
    element: <App /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  },
];

export default AllRoutes;
