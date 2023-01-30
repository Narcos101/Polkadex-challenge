
import React, {ReactEventHandler, useState} from "react";
import styled from "styled-components";

const Input = styled.input`
    width:20px;
    text-align:center;
`
const Button = styled.button`
    width:15px;
`

function IncDecCounter({num,setNum} : any){
    const incNum =()=>{
        if(num<10)
        {
            setNum(Number(num)+1);
        }
    };
    const decNum = () => {
        if(num>0)
        {
        setNum(num - 1);
        }
    }
    const handleChange = (e : any)=>{
        setNum(e.target.value);
    }

   return(
    <>
    <div>
        <div style={{"display":"flex"}}>
            <div>
                <Button type="button" onClick={decNum}>-</Button>
            </div>
            <Input disabled type="text"value={num} onChange={handleChange}/>
        <div >
            <Button type="button" onClick={incNum}>+</Button>
        </div>
    </div>
    </div>
   </>
  );
}

export default IncDecCounter;