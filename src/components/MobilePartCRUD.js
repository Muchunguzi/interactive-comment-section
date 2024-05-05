//MobilePartCRUD component:
//
//  style : an object containing dynamic CSS properties recieved from vatious parent
//          components.  
//        - MarginTop  -  The top margin of this component in the 
//                         desired parent component



import { useState } from "react";
import { VoteSectionMobile } from "./VoteSectionMobile";
import {FaTrash , FaEdit} from "react-icons/fa"

const MobilePartCRUD = ({style , count , increaseVote , decreaseVote , deleteID  , onDelete}) => {
   
   const [deleteModal , setDeleteModal] = useState(false);

   const denyDelete = () => {

     setDeleteModal(false)
     
   } 
 
   const confirmDelete = () => {
   console.log(deleteID);
   onDelete(deleteID);
   }
 


    return (
        <div style={style} className="mobiles_CRUD">
              
            
              <div className="voteSection_mobile_part">
             <VoteSectionMobile count={count} increaseVote={increaseVote} decreaseVote={decreaseVote} />
             </div>

             <span className="voteSection_mobile_part"></span>
             
             <div className="voteSection_mobile_part">
                   

        <div style={{display:'flex', flexDirection:'row'}}>
        <button onClick={() => setDeleteModal(true)} className="crudMobile" style={{backgroundColor: 'white' , color: 'black', marginTop: '1%'}}>
        <FaTrash  style={{color: 'red', fontSize: '12', marginRight: '2'}} />
        Delete
        </button>
        {deleteModal && (
            
            <div className='deleteModal'>

                <div className='deleteModal-content'>
                <h2>Delete comment</h2>
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