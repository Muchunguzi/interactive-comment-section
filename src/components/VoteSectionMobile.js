import {FaPlus} from 'react-icons/fa';
import {FaMinus} from 'react-icons/fa';

const VoteSectionMobile = () => {
    return(
        <div className='voteSection_mobile'>
           <div className="voteBoard_mobile">
            <FaPlus className='faPlus'/>
            <span className='vote'>12</span>
            <FaMinus className='faMinus'/>
           </div>
        </div>
    )
}


export {VoteSectionMobile};