import React, {useState} from 'react'

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './NewBoxForm.css'



const NewBoxForm=({createBox})=>{
    let [form,setForm] =useState({height:100, width:100,color:''})

    let handleSubmit=(e)=>{
        e.preventDefault()
        createBox(form)
    }
    let handleChange=(value,isHeight)=>{
        let dimension = isHeight ? 'height' : 'width';
        setForm((old)=>({...old, [dimension]:value}))
        //setForm(curr=>({...curr,[e.target.parentElement.id]:Number(e.target.firstChild.firstChild.innerText)}))
    }
    let handleColorChange = (e)=>{
        setForm(old=>({...old, color:e.target.value}))
    }


    return(
        <form onSubmit={handleSubmit}className='new-box-form'>
           <div className='new-box-form-container1'> 
               <div className='new-box-form-container'>
                <Slider
                        aria-labelledby="discrete-slider-always"
                        step={1}
                        valueLabelDisplay="on"
                        onChange={(e,value)=>handleChange(value,true)}
                        id='height'
                        type='range'
                        min={40}
                        max={200}
                        name='height'
                        value={form.height}
                />
                <Typography id="discrete-slider-always" gutterBottom>
                    Height
                </Typography>
                </div>
                <div className='new-box-form-container'>
                    <Slider
                            aria-labelledby="discrete-slider-always"
                            step={1}
                            valueLabelDisplay="on"
                            onChange={(ev,value)=>handleChange(value,false)}
                            id='width'
                            type='range'
                            min={40}
                            max={200}
                            name='width'
                            value={form.width}
                    />
                    <Typography id="discrete-slider-always" gutterBottom>
                        Width
                    </Typography>
                </div>
                
            </div>
            <div className='new-box-form-container2'>
                <Typography id="discrete-slider-always" gutterBottom>
                        Color
                </Typography>
                <input onChange={handleColorChange} id='color'type='color'name='color' value={form.color}></input>
            </div>
            
            <Button variant="outlined" onClick={handleSubmit}color="primary"  aria-label="create square">Add Square</Button>

        </form>
    )
}

export default NewBoxForm