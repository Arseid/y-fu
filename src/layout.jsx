import React from 'react';
import Gacha from "./pages/gacha/gacha";
import Home from "./pages/home/home";
import Minigames from "./pages/minigames/minigames";

const Layout = () => {
    const layoutList = [Gacha,Home,Minigames];
    const [currentLayout, setCurrentLayout] = React.useState(layoutList[0]);

    const changeLayout = (id) => setCurrentLayout(layoutList[id]);

    return <div>
        {currentLayout}
        <button onClick={()=>{changeLayout(0)}}>Gacha</button>
        <button onClick={()=>{changeLayout(1)}}>Home</button>
        <button onClick={()=>{changeLayout(2)}}>Minigames</button>
    </div>
};

export default Layout;
