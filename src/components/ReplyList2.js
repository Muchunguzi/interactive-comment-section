import {RamsesReply} from './RamsesReply'
import Reply from './Reply'


const ReplyList2 = ({replys}) => {
    return(
        <div className="replyList">
            <>
            
         
            {replys.map(reply => <Reply key={reply.id} reply={reply} />)}
            
           

            </>
            
        </div>
    )
}

export {ReplyList2}