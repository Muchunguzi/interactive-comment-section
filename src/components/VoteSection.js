import {FaPlus} from 'react-icons/fa';
import {FaMinus} from 'react-icons/fa';
import { useState } from 'react';

const VoteSection = ({count, increaseVote, decreaseVote}) => {

   

    return(
        <div className='voteSection'>
           <div className="voteBoard">
            <FaPlus onClick={increaseVote} className='faPlus'/>
            <span id='voteCount' className='vote'>{count}</span>
            <FaMinus onClick={decreaseVote} className='faMinus'/>
           </div>
        </div>
    )
}


export {VoteSection};