import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import './BoxList.css'



const BoxList = ()=>{
let [boxes,setBoxes] = useState([])

let createBox= ({height,width,color})=>{
    setBoxes(curr=>
        [...curr,{height,width,color,key:uuid()}]
    )
}
let removeBox= (key)=>{
    setBoxes(curr=>curr.filter(box=>box.key!=key))

}



    return(
        <div className="box-list">
            <div className='box-list-container'>
                <NewBoxForm createBox={createBox}/>
            </div>
            <div className='box-list-list'>
            {boxes.map(({height,width,color,key})=>(
            <Box 
            id={key}
            height={height}
            width={width}
            color={color}
            removeBox={removeBox}
            />)
            )}
            </div>
        </div>
    )
}


export default BoxList