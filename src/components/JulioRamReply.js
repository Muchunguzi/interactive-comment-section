import { VoteSection } from './VoteSection';
import juliosomo from '../assets/images/image-juliusomo.png'
import { FaTrash, FaTrashAlt , FaEdit, FaReply } from 'react-icons/fa';
import moment from 'moment';
import React ,  { useState, useEffect } from 'react';
import { MobilePartCRUD } from './MobilePartCRUD';

const JulioRamReply = () => {

const style = {

    marginTop : '10%',
}

const [timeAgo, setTimeAgo] = useState('');

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
        <div className="reply">
        <VoteSection count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} />
        
        <div className='middle_comment_part'>

            <div className='comment_upper_part'>
            <img className='Dp' src={juliosomo} alt='comment_profile_picture' />
            <h5 className='userName'>juliusomo</h5>
            <h4 style={{backgroundColor:'blue',color:'white',width:'10%',
            height:'45%', marginRight:'2%'}}>you</h4>
            
            <p>2 days ago</p>
            
            </div>
           
            <p>
                <span style={{fontWeight:'bold'}}>@ramsesmiron</span> I couldn't agree more with this. Everything moves so <br/>
                fast and it always seems like everyone know the newest library/< br />
                framework.But the fundamentals are what stay constant.
            </p>

            <MobilePartCRUD count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} style={style} />

        </div>
        
        
       
        
        <div style={{display:'flex', flexDirection:'row'}}>
        <button className="crudDesktop" style={{backgroundColor: 'white' , color: 'black', marginTop: '1%'}}>
        <FaTrash  style={{color: 'red', fontSize: '12', marginRight: '2'}} />
        Delete
        </button>
        
        <button className='crudDesktop' style={{backgroundColor: 'white', color: 'black', marginTop: '1%'}}>
        <FaEdit style={{color: 'green' , display: 'inline'}} />
        Edit
        </button>
        
        </div>
        
        
        
        
       </div>
    )

}


export {JulioRamReply};