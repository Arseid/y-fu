import React from 'react';
import './gacha.css';
import bg_gacha from '../../ressources/bg_gacha.png';

const Gacha = () => {
    return <div className='Gacha' style={{backgroundImage: `url(${bg_gacha})`}}>
        <h1>Gacha</h1>
        <input/>
    </div>
};

export default Gacha;
