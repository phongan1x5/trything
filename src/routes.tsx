import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/pages/LockScreenPage.js";
import LoginPage from "views/pages/auth/LoginPage";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/pages/PricingPage.js";
import RTLSupport from "views/pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
// import RegisterPage from "views/pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

import ProcessLogin from "views/pages/auth/ProcessLogin";
import LogoutPage from "views/pages/auth/LogoutPage";
import RegisterPage from "views/pages/auth/RegisterPage";
import VehicleRegisterPage from "views/pages/auth/VehicleRegisterPage";
import RecoveryPasswordPage from "views/pages/auth/RecoveryPasswordPage";

const dashRoutes = [
  // Nauvus
  {
    path: "/login",
    name: "Login Page",
    component: ProcessLogin,
    layout: "/auth"
  },
  {
    path: "/sign-in",
    name: "Login Page",
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/logout",
    name: "Logout Page",
    component: LogoutPage,
    layout: "/auth"
  },
  {
    path: "/sign-up",
    name: "Register Page",
    component: RegisterPage,
    layout: "/auth"
  },
  {
    path: "/register-vehicle",
    name: "Register Page",
    component: VehicleRegisterPage,
    layout: "/auth"
  },
  {
    path: "/recovery-password",
    name: "Recovery password",
    component: RecoveryPasswordPage,
    layout: "/auth"
  },
  // Template
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "??????????",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/pricing-page",
        name: "Pricing Page",
        rtlName: "????????????????",
        mini: "PP",
        rtlMini: "??",
        component: PricingPage,
        layout: "/auth"
      },
      {
        path: "/rtl-support-page",
        name: "RTL Support",
        rtlName: "?????????? ??????",
        mini: "RS",
        rtlMini: "????",
        component: RTLSupport,
        layout: "/rtl"
      },
      {
        path: "/timeline-page",
        name: "Timeline Page",
        rtlName: "???????????????? ????????????",
        mini: "T",
        rtlMini: "????",
        component: TimelinePage,
        layout: "/admin"
      },
      // {
      //   path: "/sign-in",
      //   name: "Login Page",
      //   rtlName: "?????????????????? ????????????",
      //   mini: "L",
      //   rtlMini: "????????",
      //   component: LoginPage,
      //   layout: "/auth"
      // },
      {
        path: "/register-page",
        name: "Register Page",
        rtlName: "??????????",
        mini: "R",
        rtlMini: "????",
        component: RegisterPage,
        layout: "/auth"
      },
      {
        path: "/lock-screen-page",
        name: "Lock Screen Page",
        rtlName: "???????? ????????????",
        mini: "LS",
        rtlMini: "????????",
        component: LockScreenPage,
        layout: "/auth"
      },
      {
        path: "/user-page",
        name: "User Profile",
        rtlName: "?????? ???????????? ????????????????",
        mini: "UP",
        rtlMini: "????",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/error-page",
        name: "Error Page",
        rtlName: "???????? ??????????",
        mini: "E",
        rtlMini: "????????????",
        component: ErrorPage,
        layout: "/auth"
      }
    ]
  },
  {
    collapse: true,
    name: "Components",
    rtlName: "????????????????",
    icon: Apps,
    state: "componentsCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        rtlName: "???????????? ?????????? ??????????????????",
        mini: "MC",
        rtlMini: "??",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            rtlName: "????????",
            mini: "B",
            rtlMini: "??",
            component: Buttons,
            layout: "/admin"
          }
        ]
      },
      {
        path: "/buttons",
        name: "Buttons",
        rtlName: "????????",
        mini: "B",
        rtlMini: "??",
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        rtlName: "???????? ????????????",
        mini: "GS",
        rtlMini: "????",
        component: GridSystem,
        layout: "/admin"
      },
      {
        path: "/panels",
        name: "Panels",
        rtlName: "??????????",
        mini: "P",
        rtlMini: "??",
        component: Panels,
        layout: "/admin"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        rtlName: "?????????? ??????????",
        mini: "SA",
        rtlMini: "??????",
        component: SweetAlert,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "??????????????",
        mini: "N",
        rtlMini: "??",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "????????????",
        mini: "I",
        rtlMini: "??",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        rtlName: "??????????",
        mini: "T",
        rtlMini: "??",
        component: Typography,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Forms",
    rtlName: "????????????????",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        rtlName: "?????????? ??????????",
        mini: "RF",
        rtlMini: "????",
        component: RegularForms,
        layout: "/admin"
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        rtlName: "?????????? ??????????",
        mini: "EF",
        rtlMini: "??????",
        component: ExtendedForms,
        layout: "/admin"
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        rtlName: "?????????? ???????????? ???? ??????????",
        mini: "VF",
        rtlMini: "????",
        component: ValidationForms,
        layout: "/admin"
      },
      {
        path: "/wizard",
        name: "Wizard",
        rtlName: "????????",
        mini: "W",
        rtlMini: "??",
        component: Wizard,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Tables",
    rtlName: "??????????????",
    icon: GridOn,
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        rtlName: "???????????? ??????????",
        mini: "RT",
        rtlMini: "????",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        rtlName: "?????????? ??????????",
        mini: "ET",
        rtlMini: "??????",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        rtlName: "???? ?????? ??????????????",
        mini: "RT",
        rtlMini: "????",
        component: ReactTables,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Maps",
    rtlName: "??????????",
    icon: Place,
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        rtlName: "?????????? ????????",
        mini: "GM",
        rtlMini: "????",
        component: GoogleMaps,
        layout: "/admin"
      },
      {
        path: "/full-screen-maps",
        name: "Full Screen Map",
        rtlName: "?????????? ?????????? ????????????",
        mini: "FSM",
        rtlMini: "??????",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-maps",
        name: "Vector Map",
        rtlName: "?????????? ????????????",
        mini: "VM",
        rtlMini: "????",
        component: VectorMap,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/widgets",
    name: "Widgets",
    rtlName: "????????????????",
    icon: WidgetsIcon,
    component: Widgets,
    layout: "/admin"
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "???????????? ????????????????",
    icon: Timeline,
    component: Charts,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "??????????????",
    icon: DateRange,
    component: Calendar,
    layout: "/admin"
  }
];
export default dashRoutes;
