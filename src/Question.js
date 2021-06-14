import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {

  const [showAnswer,setShowAnswer] = useState(false);
  return (  <article className="question">
    <header> 
        
    </header>
   { showAnswer &&  <p>{info}</p>}
  </article> );
};

export default Question;
