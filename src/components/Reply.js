import React, { useState , useEffect } from 'react';
import { VoteSection } from './VoteSection';
import { FaReply , FaTrash, FaEdit } from 'react-icons/fa';
import moment from 'moment';
import { MobilePartCRUD } from './MobilePartCRUD';

const Reply = ({reply}) => {

  const mobileStyles = {
         
    marginTop : '5%',

  };
 
  const [timeAgo , setTimeAgo]  = useState('');

  useEffect(() => {

     const updateTime = () => {

          const time = moment(reply.timeStamp).fromNow();
          setTimeAgo(time);

     }

     updateTime();

     const interval = setInterval(updateTime, 60000);

     return () => clearInterval(interval)

  }, [reply.timeStamp])


  return (
    <div className='reply'>
           <VoteSection />
        
        <div className='middle_comment_part'>

            <div className='comment_upper_part'>
            <img className='Dp' src={reply.profile_picture} alt='comment_profile_picture' />
            <h5 className='userName'>{reply.userName}</h5>
            
            <h4 style={{backgroundColor:'blue',color:'white',width:'10%',
            height:'45%', marginRight:'2%'}}>you</h4>

            <p>{timeAgo}</p>
            
            </div>
           
            <p><span style={{fontWeight:'bold'}}>{reply.initial}</span>{reply.text}</p>
            
            <MobilePartCRUD className="crudStyles" style={mobileStyles} />

        </div>
        
        
        <div style={{display:'flex', flexDirection:'row'}}>
        <button className='crudDesktop' style={{backgroundColor: 'white' , color: 'black', marginTop: '1%'}}>
        <FaTrash  style={{color: 'red', fontSize: '54', marginRight: '2'}} />
        Delete
        </button>
        
        <button className="crudDesktop" style={{backgroundColor: 'white', color: 'black', marginTop: '1%'}}>
        <FaEdit style={{color: 'green' , display: 'inline'}} />
        Edit
        </button>
        
        </div>
        
        
    </div>
  )
}

export default Reply