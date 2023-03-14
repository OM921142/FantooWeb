import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import Data from '../SubCatagory/SubCat.json'
import Subcat from '../SubCatagory/SubCat.json'
import { Link } from 'react-router-dom'
import NumericInput from 'react-numeric-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { width } from '@mui/system';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import CartHeader from './CartHeader'
export default function Cart() {
    const [count, setCount] = useState(1);
    const value = useParams();
    console.log("Value in subtrtrcat", value);
   let product = Data.Games.find((data) => data.id === value.cart)
    console.log(product);
  return (
      <div>
        <CartHeader />
          <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1,marginLeft:'1%',
              padding: 10, backgroundColor:"#eee",marginRight:12,marginTop:'2%'
          }}>
              <span style={{
                  width: "5%",
                  justifyContent: "center",
              }}>
                  <img style={{
                      display: 'flex',
                      marginLeft: '1%', marginBottom: 15,height:80
                  }} src={product.image}></img>
                  </span>
              <span style={{
                  justifyContent: "center",
                  flex: 1,
                  paddingLeft: 10,
                  marginLeft: 80
              }}>
                  <div style={{marginRight:'60%'}}>
                  <div style={{marginRight:'60%',marginTop:-15}}><text style={{
                       marginBottom: 15, fontSize:17,marginTop:-5
                  }}>{product.title}</text><br></br></div>
                <div style={{marginRight:'60%',marginTop:10}}>
                  <div style={{display:'flex',border:'2px solid #BBC4C2',width:100,borderRadius:5 }}>
                  <button style={{backgroundColor:'#BBC4C2',borderWidth:0,borderRadius:1,marginLeft:0}}
                  onClick={() => setCount(count - 1)}><FontAwesomeIcon icon={faMinus}  /></button>
                  <text style={{marginRight:20,marginLeft:17}}> {count} </text>
                  <button style={{backgroundColor:'#BBC4C2',borderWidth:0,borderRadius:3}}
                   onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={faPlus}  /></button>
                  </div>
                {/* <NumericInput style={{width:"15%",marginRight:60}} min={1}value={1}/> */}
                </div>
                  </div>
                  
                  
                  
                  </span>
          <span style={{

              justifyContent: "flex-end",
                  alignItems: "center", 
          }}>
                  <text style={{marginRight:50}}>{count}* $ {product.price}</text>
                  
              </span>
              </div>
            
             
          <div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1,marginTop:'2%',marginLeft:'1%',
              padding: 10, backgroundColor:"#eee",marginRight:12
          }}>
              <span style={{
                  width: "20%",
                  justifyContent: "center",alignItems:'center'
              }}>
                  <text style={{
                      display: 'flex',
                      marginLeft: '1%', marginBottom: 15,alignSelf:"center"
                  }}> Sub Total: </text>
                  </span>
              <span style={{
                  justifyContent: "center",
                  flex: 1,
                  paddingLeft: 10,
                  marginLeft: 80
              }}>
                  {/* <text style={{
                      display: "flex", marginBottom: 15, marginLeft: "-25%"
                  }}>{product.title}</text> */}
                  </span>
          <span style={{

              justifyContent: "flex-end",
                  alignItems: "center", 
          }}>
                  <text style={{marginRight:50}}>  $ {count* product.price}  </text>
                  
              </span>
              </div>
              <div>
           
<div>
<div style={{
              alignItems: 'center', justifyContent: 'center', display: 'flex',
              flex: 1,marginLeft:'1%',
              padding: 10,marginRight:12
          }}>
              <span style={{
                  width: "20%",
                  justifyContent: "center",
              }}>
                  <text style={{
                      display: 'flex',
                      marginLeft: '1%', marginBottom: 15,fontStyle:'italic'
                  }}>* 18% GST will be applicable</text>
                  </span>
              <span style={{
                  justifyContent: "center",
                  flex: 1,
                  paddingLeft: 10,
                  marginLeft: 80
              }}>
                  <text style={{
                      display: "flex", marginBottom: 15, marginLeft: "-25%"
                  }}></text></span>
          <span style={{

              justifyContent: "flex-end",
                  alignItems: "center", 
          }}>
               
                  
              </span>
              </div>
</div>



              <div style={{marginTop:'2%'}}>
              <Link to={`/EventDetails/${product.title}/${count* product.price}`}>
              <button style={{width:'40%',height:40,borderWidth:0,borderRadius:5,
              backgroundColor:'rgb(99, 195, 165)'}}> 
             <text style={{fontSize:21,color:'white'}}> NEXT </text>
              </button>
                </Link>
                </div>
             
              </div>
      <Footer />
      </div>
  )
}




