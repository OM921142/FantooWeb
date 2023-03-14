import React, { useContext, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'
import AppContext from '../../context/AppContext'
import CartHeader from './CartHeader'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem'
import EventDetails from '../EventDetails/EventDetails'
import Gamedetails from '../GameDetails/Gamedetails'
import SubTotal from './SubTotal'
import images from '../../Images/image3.png'
import Images from '../../Images/image2.png'
import "./cardBody.css";
import { height } from '@mui/system'


let items = [{
  id: "1",
  name: "Surfing",
  images: images,
  price:"25000"
},
{
  id: "2",
  name: "Carousel",
  images: Images,
  price:"25000"
}
]

export default function CartPage(props) {
  // const context=useContext(AppContext)
  const [count, setCount] = useState(1);

  const conText = useContext(AppContext)

  var arr = conText.arr.map((a) => a.price

  )
  var sum = arr.reduce(function (x, y) {
    return x + y;
  }, 0);

  console.log("Sum is " + sum)
  console.log('1....55.....1', props);


  let subTotal = 0;

  for (let i = 0; i < conText.arr.length; i++) {
    //subTotal=subTotal+(conText.arr[i].price)
    console.log(conText.arr[i].price, '11...........55');
    console.log(subTotal);
    subTotal = subTotal + (Number(conText.arr[i].price));
  }

  //   console.log(subTotal);

  return (

    <div style={{backgroundColor:"aliceblue"}}>

      <CartHeader title="Cart" />

      <div style={{ marginTop: '2%', marginRight: '2%', marginLeft: '2%' }}>
        <div>
          {items.map((item) => {
           return  <CartItem title={item.name} image={images} price={item.price} />
          }
          )}


          {/* <div>{conText.arr.map((a)=><item><text>{a}</text>{a[0]}</item>)}</div> */}
          {/* <Gamedetails /> */}
          <Card body style={{display:'flex', marginTop: 10, justifyContent:'space-between' }}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <text style={{
              fontStyle: 'italic',
            }}>Sub Total:</text>
              <text style={{
              fontStyle: 'italic',
            }}>50000</text>
            </div>
          </Card>
        </div>
        <div style={{ marginTop: '2%' }}>
          <Link

          //</div> to={`/EventDetails/${product.title}/${count* product.price}`}      
          >
            <button style={{
              width: '100%', height: 35, borderWidth: 0, borderRadius: 5,
              backgroundColor: 'rgb(99, 195, 165)', marginBottom:20
            }}>
              <text style={{ fontSize: 18, color: 'white' }}> NEXT </text>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


