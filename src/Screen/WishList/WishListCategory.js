import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import images from '../../Images/image3.png'
import CartHeader from "../../Screen/Cart/CartHeader";

let items = [{
    id: "1",
    name: "Surfing",
    images: images,
    price: "25000"
},
{
    id: "2",
    name: "Carousel",
    images: images,
    price: "25000"
}
]
const WishListCategory = (props) => {
    const [count, setCount] = useState(1);
    const [num, setNum] = useState('')
    const conText = useContext(AppContext)

    return (
        <>
            <CartHeader title="Wishlist" />
            {items.map((item) => {
                return <div style={{ display: 'flex', flexDirection: 'column', }}>
                    <div>
                        <div className=" p-4 bd-highlight" style={{
                            backgroundColor: "white",
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'row',
                            // justifyContent:'space-between',
                            alignItems: 'center',
                            borderBottomWidth: '1px', borderBottomColor: '#ddd', borderBottomStyle: 'solid'
                            
                        }}>
                            <div className="">
                                <img style={{}} src={item.images}></img>
                            </div>
                                <div style={{marginLeft:20}}>
                                    <text>{item.name}</text>
                                </div>

                            <div className="" style={{ position: 'absolute', right: 40 }}>

                                <text>
                                ₹{item.price}
                                </text>

                            </div>
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}
export default WishListCategory;
