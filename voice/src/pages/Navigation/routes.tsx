import AboutUs from "../AboutUs";
import Privacy from "../Agreements/Privacy";
import Terms from "../Agreements/Terms";
import ContactUsPage from "../ContactUs";
import Dashboard from "../Dashboard";
import LandingPage from "../LandingPage";
import LiveDemo from "../LiveDemo";
import Loading from "../Loading";
import Login from "../Login";
import Status from "../Preview";
import Profile from "../Profile";
import Signup from "../Signup";
import Verification from "../Verification";
import Workings from "../Workings";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "/how-it-works",
    element: <Workings />,
  },
  {
    path: "/live-demo",
    element: <LiveDemo />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/status/:message",
    element: <Status />,
  },
  {
    path: "/terms-and-agreements",
    element: <Terms />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
];
