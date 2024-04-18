import Login from "../pages/Login";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";
import BaseMain from "../pages/layout/BaseMain";

type TypeRoute = {
    path:string,
    element:any,
    isProtected?:boolean,
    children?:TypeRoute[]
}

export const  routes : TypeRoute[] = [
    {
        path: "/",
        element:Welcome
    },
    {
        path:'/login',
        element : Login,
    },
    {
        path:'/register',
        element : Register,
    },
    {
        path:'/main',
        element : BaseMain,
        isProtected: true,
        children:[
            {
                path:'',
                element:Main,
            }
        ]
    },
    {
        path:'/profile',
        element:BaseMain,
        isProtected: true,
        children:[
            {
                path:'',
                element:Profile,
            }
        ]
    }
]