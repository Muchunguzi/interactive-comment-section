import React from "react";
import { FaReply } from "react-icons/fa";

const ReplyPartMobile = ({openReply}) => {
    return (
              <div className='reply_area_mobile' onClick={openReply}>
               <FaReply  className='reply_area_mobile' style={{color: 'blue' , marginTop: '15%'}} />
               <button className='reply reply_area_mobile'>Reply</button>
               </div>
    )
}


export {ReplyPartMobile};