import React from "react";
import bc from './Buildcontrol.module.css';


const buildControl =  (props) =>
(

<div className={bc.BuildControl}>

<div className ={bc.Label}>{props.label}</div>
<button className={bc.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
<button className={bc.More} onClick={props.added}>More</button>
</div>
);
export default buildControl; 