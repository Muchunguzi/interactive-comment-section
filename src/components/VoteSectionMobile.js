import {FaPlus} from 'react-icons/fa';
import {FaMinus} from 'react-icons/fa';
import React , { useState } from 'react';

const VoteSectionMobile = ({count, decreaseVote, increaseVote}) => {

  

    return(
        <div className='voteSection_mobile'>
           <div className="voteBoard_mobile">
            <FaPlus onClick={increaseVote} className='faPlus'/>
            <span className='vote'>{count}</span>
            <FaMinus onClick={decreaseVote} className='faMinus'/>
           </div>
        </div>
    )
}


export {VoteSectionMobile};