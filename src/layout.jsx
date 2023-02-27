import React from 'react';
import Gacha from "./pages/gacha/gacha";
import Home from "./pages/home/home";
import Minigames from "./pages/minigames/minigames";

const Layout = ({changeLayout, currentLayout}) => {

    const layout = (currentLayout) => {
        let tempLayout;
        if (currentLayout === 'Gacha') tempLayout = (<Gacha/>)
        else if (currentLayout === 'Home') tempLayout = (<Home/>)
        else if (currentLayout === 'Minigames') tempLayout = (<Minigames/>)
        return tempLayout;
    }

    return <div>
        {layout(currentLayout)}
        <div style={{bottom: 0, position: "absolute", left:0, right: 0}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <button onClick={()=>{changeLayout(0)}}>Gacha</button>
                <button onClick={()=>{changeLayout(1)}}>Home</button>
                <button onClick={()=>{changeLayout(2)}}>Minigames</button>
            </div>
        </div>
    </div>
};

export default Layout;
