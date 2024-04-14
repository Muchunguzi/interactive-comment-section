import {FaPlus} from 'react-icons/fa';
import {FaMinus} from 'react-icons/fa';

const VoteSection = () => {
    return(
        <div className='voteSection'>
           <div className="voteBoard">
            <FaPlus className='faPlus'/>
            <span className='vote'>12</span>
            <FaMinus className='faMinus'/>
           </div>
        </div>
    )
}


export {VoteSection};