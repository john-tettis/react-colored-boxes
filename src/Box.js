import React,{useState} from 'react'
import './Box.css'




const Box = ({height, width, color, id, removeBox})=>{
    let [hover,setHover]= useState(false)

    return(
    <div 
    data-testid='box-element'
    key={id}
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    onClick={()=>removeBox(id)}
    className="Box"
    style={{
        height: `${height}px`,
        width:`${width}px`,
        backgroundColor:color
    }}
    >
        {hover && <i onMouseOver={()=>setHover(true)} className=" Box-delete far fa-minus-square fa-3x"></i>}

    </div>)
}

export default Box