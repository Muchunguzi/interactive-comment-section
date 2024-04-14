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


  return (
    <div className="App">
      <CommentList comments = {comments} />
      <CommentForm addComment={addComment}/>
      <Attribution />
    </div>
  );
}

export default App;
