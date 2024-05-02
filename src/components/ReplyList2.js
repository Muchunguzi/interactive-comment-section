import {RamsesReply} from './RamsesReply'
import Reply from './Reply'


const ReplyList2 = ({replys , onDelete}) => {
    return(
        <div className="replyList">
            <>
            
         
            {replys.map(reply => <Reply key={reply.id} reply={reply}  onDelete={onDelete}/>)} 
            
           

            </>
            
        </div>
    )
}

export {ReplyList2}