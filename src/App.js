import {useState} from 'react';
import {CommentList} from './components/CommentList';
import { CommentForm } from './components/CommentForm';

import './App.css';
import { Attribution } from './components/Attribution';



function App() {

const [comments , setComments] = useState([]);

const addComment = (comment) => {

setComments([
  ...comments,{
    ...comment,
    id: Date.now(),
  },
])

}

//Below is an function called onDelete which I pass down to commentList then comment 
//from the parent here App.js , I use this to update the state of the comments list
//with the filter function which returns a list of comments with comments having 
//ids not similar to the passed on Selected Id targeted by the comment component!

const onDelete = (id) => {
  setComments(comments.filter(comment => comment.id !== id));
  
 }


  return (
    <div className="App">
      <CommentList comments = {comments} onDelete={onDelete} />
      <CommentForm addComment={addComment}/>
      <Attribution />
    </div>
  );
}

export default App;
