import React from 'react';
import {JulioRamReply} from './JulioRamReply';
import {RamsesReplies} from './RamsesReplies'

const RamReplyList = ({RamReplys , onDelete}) => {
    return (
        <div>
            < JulioRamReply />
           {RamReplys.map((reply) => {
            return <RamsesReplies key={reply.id} reply={reply} onDelete={onDelete} />
           })}
           
        </div>
    );
}

export {RamReplyList};