//MobilePart componenet
//
//Style : An Object containiing dynamic CSS properties from a parent component
//       MarginTon - the top margin part in the presented parent component
//

import React from "react";
import { VoteSectionMobile} from "./VoteSectionMobile";
import { ReplyPartMobile } from './ReplyPartMobile';


const MobilePart = ({openReply, style, count , increaseVote , decreaseVote}) => {
    return (
        <div style={style} className="mobiles">
     
          
             <div className="voteSection_mobile_part">
             <VoteSectionMobile count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} />
             </div>

             <span className="voteSection_mobile_part"></span>
             
             <div className="voteSection_mobile_part">

            <ReplyPartMobile openReply={openReply} />

             </div>
        
         
        </div>
    )
}

export {MobilePart};