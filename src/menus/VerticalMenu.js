import React from "react";
import { Link } from "react-router-dom";
export default function VerticalMenu(){
    
    const options = [ 'home', 'bar-visuals' , 'box-visuals', 'area-visuals' , 'histogram-visuals' , 'line-visuals' , 'pie-visuals',
        'scatter-visuals'
     ];
    
    return(
    <div className="vertical-menu">
        { options.map((option,index)=>{
            return <Link  key={index} to={option === 'home'?'/':`/${option}`} className="menu-link">
                {option.split("-").map( word=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
        })}
    </div>);
}