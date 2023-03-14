import React from 'react'
import './WishList.css'
import { useNavigate, useParams } from 'react-router-dom';
import WishListHeader from './WishListHeader'
export default function ManageOrder() {
  const value = useParams();
  console.log("Value in subcat", value);

  const navigate = useNavigate();
  const lgn = () => {
      navigate('/Home')
  }

  return (   <> 
  <WishListHeader />
  <div style={{backgroundColor:'#eee',marginTop:'5%',marginLeft:'4%',marginRight:'4%'}}>
<div>
<text style={{
    display:'flex',
     alignItems:'center',justifyContent:'center',paddingTop:'4%',color:'red',
     fontSize:20,fontFamily:'cursive'
     }}> OOPS !!! </text>
</div><br></br>
<div>
  <text style={{fontFamily:'monospace',fontWeight:'bold', fontSize:17,paddingTop:'4%'}}> No records found !!</text>
</div><br></br>
<div style={{paddingBottom:'8%',paddingTop:'4%'}}>
  <button onClick={lgn} className='shopping' >
    <text style={{fontSize:20}}> START SHOPPING </text>
  </button>
</div>
     
     </div>   
     </>      
  )
}
