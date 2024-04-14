import { useState } from "react";
import julioSomo from '../assets/images/image-juliusomo.png'
import moment from 'moment';


const RamseReplyForm = ({addReply}) => {
    const [text , setText] = useState('');
    const [userName, setUserName] = useState('juliusomo');
    const [profile_picture, setProfilePic] = useState(julioSomo)
    const [initial, setInitial] = useState('@ramsesmiron ')
    
    const handleReply = (event) => {
        event.preventDefault();
        setUserName('juliusomo');
        setProfilePic(julioSomo);
        setInitial('@ramsesmiron ');
        const timeStamp = moment().format('YYYY-MM-DD HH:mm:ss');
        addReply({text , timeStamp, userName , profile_picture , initial});
        
        document.getElementById('RamReplyForm').style.display = 'none';
        setText('');
     };
   
 


    return(
        <div className="RamReplyForm" id="RamReplyForm">
        <form onSubmit={handleReply} className='form ramForm'>
        <img className='' src='' alt='' />
        <textarea maxLength={150} value={text} onChange = {e => setText(e.target.value)} placeholder = "Add a reply...." />
        <button type="submit">REPLY</button>
 
        </form>
         </div>
    );
}

export {RamseReplyForm}