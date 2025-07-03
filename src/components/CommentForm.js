import React ,{useState} from 'react';
import julioSomo from '../assets/images/image-juliusomo.png'
import moment from 'moment';


const CommentForm = ({addComment}) => {

    const [userName , setUserName] = useState("juliosomo");
    const [text, setText] = useState("");
    const [profilePic, setProfilePic] = useState(julioSomo);
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setProfilePic(julioSomo);
      setUserName('juliosomo');
      const timeStamp = moment().format('YYYY-MM-DD HH:mm:ss');
      addComment({text , profilePic , userName , timeStamp});
      setText("");
      

    };


   

    return(
       <form onSubmit={handleSubmit} className='form'>
       <img className='profilePicture' src={julioSomo} alt='profile_picture' />
       <textarea maxLength={150} value={text} onChange = {e => setText(e.target.value)} placeholder = "Add a comment...." />
       <button type="submit">SEND</button>

       </form>
    );
}

export {CommentForm};