import React , {useState , useEffect} from 'react';
import { VoteSection } from './VoteSection';
import {FaReply , FaTrash , FaEdit} from 'react-icons/fa';
import moment from 'moment';
import { MobilePartCRUD } from './MobilePartCRUD';

const RamsesReplies = ({reply , onDelete}) => {

    const [timeAgo , setTimeAgo] = useState('');
    const [deleteModal , setDeleteModal] = useState(false);
    const deleteID = reply.id;
    
    useEffect(() => {

        const updateTime = () => {
   
             const time = moment(reply.timeStamp).fromNow();
             setTimeAgo(time);
   
        }

        updateTime();

        const interval = setInterval(updateTime, 60000);
   
        return () => clearInterval(interval)
   
     }, [reply.timeStamp]) 

     const HandleDelete = () => {
        
     }

     
    const denyDelete = () => {

        setDeleteModal(false)
        console.log(reply.id);
    } 
    
    const confirmDelete = () => {
      console.log(deleteID);
      onDelete(deleteID);
    }
    
   


    return (
        <div className='reply'>
                   <VoteSection />
        
        <div className='middle_comment_part'>

            <div className='comment_upper_part'>
            <img className='Dp' src={reply.profile_picture} alt='comment_profile_picture' />
            <h5 className='userName'>{reply.userName}</h5>
            
            <h4 style={{backgroundColor:'blue',color:'white',width:'20%',
            height:'45%', marginRight:'2%'}}>you</h4> 

            <p>{timeAgo}</p>
            
            </div>
           
            <p><span style={{fontWeight:'bold'}}>{reply.initial}</span>{reply.text}</p>

            <MobilePartCRUD />
        
        </div>


        
        
        <div style={{display:'flex', flexDirection:'row'}}>
        <button onClick={HandleDelete} className='crudDesktop' style={{backgroundColor: 'white' , color: 'black', marginTop: '1%'}}>
        <FaTrash  style={{color: 'red', fontSize: '54', marginRight: '2'}} />
        Delete
        </button>
        {deleteModal && (
            
            <div className='deleteModal'>

                <div className='deleteModal-content'>
                <h2>Delete Comment</h2>
                <p>Are you sure you want to delete this < br />
                  comment? This will remove the comment < br />
                  and it can't be undone.</p>
                <div>
                    <button className='cancelButton' onClick={denyDelete} >NO,CANCEL</button>
                    <button className='deleteButton' onClick={confirmDelete}>YES,DELETE</button>
                </div>
                </div>
                  

            </div>
        )}
        
        <button className="crudDesktop" style={{backgroundColor: 'white', color: 'black', marginTop: '1%'}}>
        <FaEdit style={{color: 'green' , display: 'inline'}} />
        Edit
        </button>
        
        </div>
        
        </div>
    )
}

export {RamsesReplies};