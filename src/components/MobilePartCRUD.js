//MobilePartCRUD component:
//
//  style : an object containing dynamic CSS properties recieved from vatious parent
//          components.  
//        - MarginTop  -  The top margin of this component in the 
//                         desired parent component



import { VoteSectionMobile } from "./VoteSectionMobile";
import {FaTrash , FaEdit} from "react-icons/fa"

const MobilePartCRUD = ({style}) => {
    return (
        <div style={style} className="mobiles_CRUD">
              
            
              <div className="voteSection_mobile_part">
             <VoteSectionMobile />
             </div>

             <span className="voteSection_mobile_part"></span>
             
             <div className="voteSection_mobile_part">
                   

        <div style={{display:'flex', flexDirection:'row'}}>
        <button className="crudMobile" style={{backgroundColor: 'white' , color: 'black', marginTop: '1%'}}>
        <FaTrash  style={{color: 'red', fontSize: '54', marginRight: '2'}} />
        Delete
        </button>
        
        <button className='crudMobile' style={{backgroundColor: 'white', color: 'black', marginTop: '1%'}}>
        <FaEdit style={{color: 'green' , display: 'inline'}} />
        Edit
        </button>
        
        </div>


             </div>
            

        </div>    
        )
}

export {MobilePartCRUD};