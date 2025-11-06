import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Options from "../pages/Options";
import MTSPagse from "../pages/MTSPagse";
import SmartRobotpagse from "../pages/SmartRobot";
import Questions from "../pages/Questions";
import Q1 from "../pages/Q1";
import Q2 from "../pages/Q2";
import Q3 from "../pages/Q3";
import Q4 from "../pages/Q4";
import Thankyou from "../pages/thankyou";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/options", Component: Options },
  { path: "/mtsvideo", Component: MTSPagse },
  { path: "/smartrobotvideo", Component: SmartRobotpagse },
  { path: "/Questions", Component: Questions },
  { path: "/Q1", Component: Q1 },
  { path: "/Q2", Component: Q2 },
  { path: "/Q3", Component: Q3 },
  { path: "/Q4", Component: Q4 },
  { path: "/thankyou", Component: Thankyou },
]);

export default function AppLayout() {
  return <RouterProvider router={router} />;
}
