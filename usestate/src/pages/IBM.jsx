import { useState } from "react"
import under from "../assets/underweight.png"
import normal from "../assets/normalweight.png"
import over from "../assets/overweight.png"

function IBM() {
    const  [weight , setWeight]=useState("")
    const  [height , setHeight]=useState("")

    const  [cal , setCal]=useState("")
    const  [per , setPer]=useState("")

    
    const addKg =(e)=>{
        setWeight(e.target.value)
    }

    const addCm =(e)=>{
        setHeight(e.target.value)
    }

    const BMI =()=>{
        setCal(weight / ((height/100)*(height/100)) )
        setHeight("")
        setWeight("")
    }
const p = ()=>{
    setPer(((height/100)*(height/100))  * 22)
}

  return (
    <div className="grid grid-flow-row justify-center items-center p-20">
       <h1 className="text-3xl">BMI Calculator</h1>
       <div className="grid grid-flow-row card shadow-sm shadow-black w-96">
        <div className="card-body">
       <label className="input-success">Enter your Weight</label>
       <input type="text " className="input input-bordered w-full max-w-xs" value={weight} onChange={addKg}></input>
       <label>Enter your Height</label>
       <input type="text" className="input input-bordered w-full max-w-xs" value={height} onChange={addCm}></input>
       <div className="card-actions">
       <button className="btn" onClick={()=>{BMI(); p();}}>Calculate</button>
       </div>
       </div>
       </div>
<h1>Your BMI : {cal}</h1>
<h1>perfe:{per}</h1>
<h1>

    {
    cal===""?"":
    (cal<18.6) ?
    
    (
    <>
        'Under Weight' 
        <img src={under}/>
        </>
        )
    :cal >= 18.6 && cal <24.9?
    
    (
    <>
    'Normal'
    <img src={normal}/>
    </>
    ):
    (
    <>
    'Over Weight'
    <img src={over}/>
    </>
    )
    }

</h1>
    </div>
  )
}

export default IBM