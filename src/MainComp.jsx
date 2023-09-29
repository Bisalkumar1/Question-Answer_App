import React, { useState } from 'react'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';


const MainComp = ({question,answer}) => {

    const[show,setshow]=useState(false);

  return (
    <>
    <div className="main-heading">
<p onClick={()=>setshow(!show)}>{show? <Tooltip title="Hide The Answer"><RemoveIcon/></Tooltip>: <Tooltip title="See The Answer"><AddIcon/></Tooltip> }</p>
        <h3>{question}</h3>
    </div>

  
   { show && <p className="answers" >{answer}</p>}
  
  
    </>
  );
};

export default MainComp