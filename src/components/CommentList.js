import {Comment} from './Comment';
import {ArmyroComment} from './ArmyroComment'; 
import {MasBlaComment} from './MasBlaComment';


const CommentList = ({comments , onDelete}) => {



return (
  <div>

    < ArmyroComment />
    < MasBlaComment />
    {comments.map(comment => <Comment key={comment.id} comment={comment} onDelete={onDelete} />)}
    {console.log(comments)}
    
  </div>
);

}

export {CommentList};