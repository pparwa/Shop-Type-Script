import React from "react";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const routes = [{
    path:"/",element:<Home />
},{
    path:"/cart",element:<Cart />
}]
export default routes