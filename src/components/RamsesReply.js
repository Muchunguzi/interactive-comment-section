import RamsesPic from '../assets/images/image-ramsesmiron.png'
import { FaReply } from "react-icons/fa";
import { VoteSection } from "./VoteSection";
import {RamReplyList} from "./RamReplyList";
import {RamseReplyForm} from "./RamseReplyForm";
import {useState} from 'react';
import { MobilePart } from './MobilePart';



const RamsesReply = ( ) => {

    const [RamReplys , setRamReplys] = useState([])

    const onDelete = (id) => {
        setRamReplys(RamReplys.filter(reply => reply.id !== id));
        
       }

    
    const addReply = (reply) => {
      setRamReplys([
       ...RamReplys, {
       ...reply,
       id: Date.now(),
       }
      ])
    }
    
    const openReply = () => {
     document.getElementById('RamReplyForm').style.display = 'initial';
    }

    const [count, setCount] = useState(12);



   
    //increase function to increment vote every time increment sign is clicked
    const increaseVote =() => {
     
        if(count >= 0 && count < 99){
            
            setCount(

                prevCount => prevCount + 1

            )
              }
    }



    //dercrease function to decrease the vote every time decrease sign is clicked
    const decreaseVote=() => {

        if(count > 0 && count <=99 ){
            
            setCount(

                prevCount => prevCount - 1

            )
        }
    }


    return(
      <>
       
       <div className='reply'>
           <VoteSection count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} />
        
        <div className='middle_comment_part'>

            <div className='comment_upper_part'>
            <img className='Dp' src={RamsesPic} alt='comment_profile_picture' />
            <h5 className='userName'>Ramsesmiron</h5>
            
            <p>1 week ago</p>
            
            </div>
           
            <p><span style={{fontWeight:'bold'}}>@masblagun </span>
            <span></span>If you are still new , I'd recommend focusing on the fundamentals
            of HTML , CSS and JS before considering React.It's very
            tempting to jump aheah but lay a solid foundationg first.
            </p>


            <MobilePart count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} openReply={openReply} />  

        </div>
        
        
        <div onClick={openReply} className='reply_area'>
        <FaReply  style={{color: 'blue'}} />
        <button className='reply reply_area'>Reply</button>
        </div>
        
        
    </div>

    <RamseReplyForm addReply={addReply} />
    <RamReplyList RamReplys={RamReplys} onDelete={onDelete} />
   
      
      </>
    )
}

export {RamsesReply};