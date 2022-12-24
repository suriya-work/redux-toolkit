// import { lazy } from 'react';
// const List = lazy(() => import("../page/List"));
// const ListCars = lazy(() => import("../page/ListCars"));
import List from '../page/List';
import ListCars from '../page/ListCars';
export const  allRoute = [
    {
        path: '/',
        component: List,
        
    },
    {
        path:"/add-cart",
        component:ListCars,
    },
]