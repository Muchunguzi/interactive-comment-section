import React from 'react'
import {RamsesReply} from './RamsesReply'
import Reply from './Reply'


const ReplyList = ({replys}) => {
    return(
        <div className="replyList">
            <>
            
            <RamsesReply />
            {replys.map(reply => <Reply key={reply.id} reply={reply} />)}
            
           

            </>
            
        </div>
    )
}

export {ReplyList}