import {JulioRamReply} from './JulioRamReply';
import {RamsesReplies} from './RamsesReplies'

const RamReplyList = ({RamReplys}) => {
    return (
        <div>
            < JulioRamReply />
           {RamReplys.map((reply) => {
            return <RamsesReplies key={reply.id} reply={reply} />
           })}
           
        </div>
    );
}

export {RamReplyList};