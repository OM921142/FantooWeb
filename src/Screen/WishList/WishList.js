import React from "react";
import CartHeader from "../../Screen/Cart/CartHeader";
import { faArrowRight, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

const WishList = () => {
  
  const navigate = useNavigate();
 const RouteChange = () => {
    navigate('/WishListCategory');
  }
  return (
    <div>
      <CartHeader title="Wishlist" />
      <div className="container-fluid mt-2"  onClick={()=>RouteChange()}>
        <div className="row p-2" style={{ borderBottomWidth: '1px', borderBottomColor: '#ddd', borderBottomStyle: 'solid' }} >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <text>WishList</text>
            <div>
              <text className="badge bg-info" style={{ borderRadius: 50, marginRight: 10 }}>2</text>
              <FontAwesomeIcon icon={faArrowRight} size='10px' style={{
                color: '#ddd'
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList;