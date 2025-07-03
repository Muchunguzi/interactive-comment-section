import { VoteSection } from "./VoteSection";
import { FaReply } from "react-icons/fa";
import masBlaImg from '../assets/images/image-maxblagun.png'
import { ReplyForm } from "./ReplyForm";
import { ReplyList } from "./ReplyList";
import React , { useState } from "react";
import { MobilePart } from "./MobilePart";



const MasBlaComment = () => {

    const style = {
      marginTop : '-4%',
    }

    const [replys , setReply] = useState([]);
    
    const openReply = () => {
        document.getElementById('replyForm').style.display = 'initial';
    }

    const addReply = (reply) => {
      setReply([
        ...replys,{
        ...reply,
        id: Date.now(),
        }
      ]);
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



    return (
          
        <>
        
        <div className="comment">
        <VoteSection count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} />
        
        <div className='middle_comment_part'>
  
            <div className='comment_upper_part'>
            <img className='Dp' src={masBlaImg} alt='' />
            <h5 className='userName'>maxblagun</h5>
            
            <p>2 weeks ago</p>
            
            </div>
           
            <p>Woah, your project looks awesome! How long have you been coding for? I'm still <br />
            new, but think I want to dive into React as well soon. Perhaps you can give me an <br />
            insight on where I can learn React? Thanks!</p>


            <MobilePart count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} style={style} openReply={openReply} />  
  
        </div>
        
        
        <div onClick={openReply} className='reply_area'>
        <FaReply  className='reply_area' style={{color: 'blue'}} />
        <button className='reply reply_area'>Reply</button>
        </div>
        
        
       </div>


        <ReplyForm addReply={addReply} />
        <ReplyList replys = {replys} />
        
        </>
        
        
        
    )
}

export {MasBlaComment};