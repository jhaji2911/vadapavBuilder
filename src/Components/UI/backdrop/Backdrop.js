import React from 'react';
import bstyle from './backdrop.module.css'

const Backdrop = (props) => (
   props.show ? <div className={bstyle.BackDrop} onClick={props.clicked}></div> : null
        
   
);

export default Backdrop;




 