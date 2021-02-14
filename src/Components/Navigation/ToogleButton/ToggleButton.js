import React from 'react';
import toggleStyles from './ToggleButton.module.css';
const ToggleButton = (props) =>
(
    <div className={toggleStyles.ToggleButton} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default ToggleButton;