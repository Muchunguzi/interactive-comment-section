import React, { useState , useEffect } from 'react';
import { VoteSection } from './VoteSection';
import { FaReply , FaTrash, FaEdit } from 'react-icons/fa';
import moment from 'moment';
import { MobilePartCRUD } from './MobilePartCRUD';


const Reply = ({reply , onDelete}) => {

  const mobileStyles = {
         
    marginTop : '5%',

  };
 
  const [timeAgo , setTimeAgo]  = useState('');
  const [deleteModal , setDeleteModal] = useState(false);
  const deleteID = reply.id;

  const denyDelete = () => {

    setDeleteModal(false)
    console.log(reply.id);
} 

const confirmDelete = () => {
  console.log(deleteID);
  onDelete(deleteID);
}


  useEffect(() => {

     const updateTime = () => {

          const time = moment(reply.timeStamp).fromNow();
          setTimeAgo(time);

     }

     updateTime();

     const interval = setInterval(updateTime, 60000);

     return () => clearInterval(interval)

  }, [reply.timeStamp])

  const [count, setCount] = useState(12);

   
  //increase function to increment vote every time increment sign is clicked
  const increaseVote =() => {
   
      if(count >= 0 && count < 99){
          
          setCount(

              prevCount => prevCount + 1

          )
            }
  }



  //dercrease function to decrease the vote every time decrease sign is clicked
  const decreaseVote=() => {

      if(count > 0 && count <=99 ){
          
          setCount(

              prevCount => prevCount - 1

          )
      }
  }


  return (
    <div className='reply'>
           <VoteSection count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} />
        
        <div className='middle_comment_part'>

            <div className='comment_upper_part'>
            <img className='Dp' src={reply.profile_picture} alt='comment_profile_picture' />
            <h5 className='userName'>{reply.userName}</h5>
            
            <h4 style={{backgroundColor:'blue',color:'white',width:'10%',
            height:'45%', marginRight:'2%'}}>you</h4>

            <p>{timeAgo}</p>
            
            </div>
           
            <p><span style={{fontWeight:'bold'}}>{reply.initial}</span>{reply.text}</p>
            
            <MobilePartCRUD count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} className="crudStyles" style={mobileStyles} />

        </div>
        
        
        <div style={{display:'flex', flexDirection:'row'}}>
        <button onClick={() => setDeleteModal(true)}  className='crudDesktop' style={{backgroundColor: 'white' , color: 'black', marginTop: '1%'}}>
        <FaTrash  style={{color: 'red', marginRight: '2'}} />
        Delete
        </button>

        {deleteModal && (
            
            <div className='deleteModal'>

                <div className='deleteModal-content'>
                <h2>Delete Reply</h2>
                <p>Are you sure you want to delete this < br />
                  reply? This will remove the reply < br />
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

export default Reply