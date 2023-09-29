import React, { useState } from 'react';
import { questions } from './DataApi';

import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import MainComp from './MainComp';

const Main = () => {
const [data,setdata]=useState(questions);

const [invalq,setinvalq]=useState("");
const [invala,setinvala]=useState("");

const inputEventq=(e)=>{
    setinvalq(e.target.value);
    }

const inputEventa=(e)=>{
setinvala(e.target.value);
}

const addItem=()=>{
    if(invalq!=="" && invala!==""){

    const allitem={id:new Date().getTime().toString(),question:invalq,answer:invala};
    // console.log(allitem);

    setdata([...data,allitem]);

    setinvala("");
    setinvalq("");
    }
    else{
        alert("Please Enter both the fields then Add");
    }
}


  return (
    <>
     <section className="main-div">
    <header>Question & Answer</header>
    <div className="quesans">
    <div className="inputpart">
    <input type="text" placeholder="Enter Question" value={invalq} onChange={inputEventq}/>
    <input type="text" placeholder="Enetr Answer" value={invala} onChange={inputEventa}/>
    </div>
    <Tooltip title="Add More Question & Answer"><button  onClick={addItem}><AddIcon/></button></Tooltip>
</div>

{
data.map((currEle)=>{
 const{id}=currEle;
 return <MainComp  key ={id} 
     {...currEle}
 />

})

}

</section>
    </>
  )
}

export default Main;