import Layout from "./layout";
import React from "react";

function App() {
    const layoutList = ["Gacha","Home","Minigames"];
    const [currentLayout, setCurrentLayout] = React.useState(layoutList[0]);
    const changeLayout = (id) => setCurrentLayout(layoutList[id]);

    return (
        <div className="App" style={{
            backgroundColor: currentLayout === 'Gacha' ? 'red' : currentLayout === 'Home' ? 'orange' : 'purple',
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
