import Layout from "./layout";
import React from "react";
import bg_home from "./ressources/bg_home.png";
import bg_gacha from "./ressources/bg_gacha.png";
import bg_minigames from "./ressources/bg_minigames.png";

function App() {
    const layoutList = ["Gacha","Home","Minigames"];
    const [currentLayout, setCurrentLayout] = React.useState(layoutList[0]);
    const changeLayout = (id) => setCurrentLayout(layoutList[id]);

    return (
        <div className="App" style={{
            backgroundImage:
                currentLayout === 'Gacha' ? `url(${bg_gacha})`
                    : currentLayout === 'Home' ? `url(${bg_home})`
                        : `url(${bg_minigames})`,
            position:'absolute',
            left:0,
            top:0,
            width:'100%',
            height:'100%'
        }}>
            <Layout currentLayout={currentLayout} changeLayout={changeLayout}/>
        </div>
    );
}

export default App;
