import {FaPlus} from 'react-icons/fa';
import {FaMinus} from 'react-icons/fa';
import { useState } from 'react';

const VoteSection = () => {

    const [count, setCount] = useState(12);

   
    //increase function to increment vote every time increment sign is clicked
    const increaseVote =() => {

          
        if(count >-1){
            
            setCount(

                prevCount => prevCount + 1

            )
           
            

        }
    }



    //dercrease function to decrease the vote every time decrease sign is clicked
    const decreaseVote=() => {

        if(count >= 0){
            
            setCount(

                prevCount => prevCount - 1

            )
           
            

        }


    }


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