import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";





const router = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/",
                element: <Header></Header>
            }
        ]

      },
])



export default router