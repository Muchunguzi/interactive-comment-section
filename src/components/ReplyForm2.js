import { useState } from "react";
import julioSomo from '../assets/images/image-juliusomo.png'
import moment from 'moment';

const ReplyForm2 = ({addReply}) => {
   
    const [text , setText] = useState('');
    const [userName, setUserName] = useState('juliosomo');
    const [profile_picture, setProfilePic] = useState(julioSomo)
    const [initial, setInitial] = useState('@amyrobson ')


    const handleReply = (event) => {
       event.preventDefault();
       setUserName('juliosomo');
       setProfilePic(julioSomo);
       setInitial('@amyrobson ');
       const timeStamp = moment().format('YYYY-MM-DD HH:mm:ss');
       addReply({text , timeStamp, userName , profile_picture , initial});
       
       document.getElementById('replyForm2').style.display = 'none';
       setText('');
    };
  


    return (
        <div className="replyForm" id="replyForm2">
       <form onSubmit={handleReply} className='form'>
       <textarea maxLength={150} value={text} onChange = {e => setText(e.target.value)} placeholder = "Add a reply...." />
       <button type="submit">REPLY</button>

       </form>
        </div>
    )
}

export {ReplyForm2};