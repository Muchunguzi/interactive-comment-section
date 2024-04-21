import {Comment} from './Comment';
import {ArmyroComment} from './ArmyroComment'; 
import {MasBlaComment} from './MasBlaComment';


const CommentList = ({comments}) => {

return (
  <div>

    < ArmyroComment />
    < MasBlaComment />
    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    
  </div>
);

}

export {CommentList};