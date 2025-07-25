import { FaTrash , FaEdit} from 'react-icons/fa';
import { VoteSection } from './VoteSection';
import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { MobilePartCRUD } from './MobilePartCRUD';

const Comment = ({comment , onDelete}) => {
    
    const [timeAgo , setTimeAgo] = useState(' ');
    const [deleteModal , setDeleteModal] = useState(false);
    const deleteID = comment.id;  // Here I absorb and keep the comments id
                                  // so as to use it later-on to update the state
                                  // of the comments such as delete. 
  
    const mobileStyles = {

        marginTop : '5%'
    }

    useEffect(() => {

        const updateTime = () => {
            const time = moment(comment.timeStamp).fromNow();
            setTimeAgo(time);
        }

        updateTime();

        const interval = setInterval(updateTime, 60000); //set an interval for update every after 1 minute (60 * 1000)

        return () => clearInterval(interval); // clear the interval to prevent data leakage and wastage of resources

    }, [comment.timeStamp]) 

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

    const denyDelete = () => {

        setDeleteModal(false)
        
      } 
    
      const confirmDelete = () => {
      console.log(deleteID);
      onDelete(deleteID);
      }
    




    return (
       <div className="comment">
        <VoteSection  count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} />
        
        <div className='middle_comment_part'>

            <div className='comment_upper_part'>
            <img className='Dp' src={comment.profilePic} alt='comment_profile_picture' />
            <h5 className='userName'>{comment.userName}</h5>

            <h4 style={{backgroundColor:'blue',color:'white',width:'10%',
            height:'45%', marginRight:'2%'}}>you</h4>
            
            <p>{timeAgo}</p>
            
            </div>
           
            <p>{comment.text}</p>

            <MobilePartCRUD count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} style={mobileStyles} 
             />


        </div>
        
        
        <div style={{display:'flex', flexDirection:'row'}}>
        <button  onClick={() => setDeleteModal(true)}  className='crudDesktop' style={{backgroundColor: 'white' , color: 'black', marginTop: '1%'}}>
        <FaTrash   style={{color: 'red', fontSize: '54', marginRight: '2'}} />
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
        
        <button className='crudDesktop' style={{backgroundColor: 'white', color: 'black', marginTop: '1%'}}>
        <FaEdit style={{color: 'green' , display: 'inline'}} />
        Edit
        </button>
        
        </div>
        
        
       </div>
    );
}


export {Comment};

