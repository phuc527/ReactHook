import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function getRandomColor() {
    const ListColor = ['deeppink', 'red', 'black', 'yellow', 'blue'];
    const getIndex = Math.trunc(Math.random() * 5);
    return ListColor[getIndex];
}

function ColorBox(props) {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        console.log(initColor);
        return initColor;
    })

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
    }

    return (
        <div className='color' style={{ backgroundColor: color }} onClick={handleBoxClick}>
            ColorBox
        </div>
    );
}

export default ColorBox;