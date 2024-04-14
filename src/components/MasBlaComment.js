import { VoteSection } from "./VoteSection";
import { FaReply } from "react-icons/fa";
import masBlaImg from '../assets/images/image-maxblagun.png'
import { ReplyForm } from "./ReplyForm";
import { ReplyList } from "./ReplyList";
import { useState } from "react";
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



    return (
          
        <>
        
        <div className="comment">
        <VoteSection />
        
        <div className='middle_comment_part'>
  
            <div className='comment_upper_part'>
            <img className='Dp' src={masBlaImg} alt='' />
            <h5 className='userName'>maxblagun</h5>
            
            <p>2 weeks ago</p>
            
            </div>
           
            <p>Woah, your project looks awesome! How long have you been coding for? I'm still <br />
            new, but think I want to dive into React as well soon. Perhaps you can give me an <br />
            insight on where I can learn React? Thanks!</p>


            <MobilePart style={style} openReply={openReply} />  
  
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