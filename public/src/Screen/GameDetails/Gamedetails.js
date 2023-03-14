import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../SubCatagory/SubCat.json'
import Subcat from '../SubCatagory/SubCat.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './Gamedetails.css'
import { Modal, Button } from "react-bootstrap";
import { faCartArrowDown, faHeart, faHouse } from '@fortawesome/free-solid-svg-icons'
import GameHeader from './GameHeader'
import { Row, Card, Col } from "react-bootstrap";
export default function Gamedetails() {
    const [name, setName] = useState(null);
    const [wishlistAdd, setwishlistAdd]=useState('')
    const handleChanges = e => {
        // setwishlistAdd([...wishlistAdd])
        tmpName = e.target.value;
     }
    let tmpName;
   
   
    const value = useParams();
    console.log("Value in subcat", value);
    let product = Data.Games.find((data) => data.title === value.pname)
  console.log(product);
    
    const [showModal, setShow] = useState(false);
    const handleClose = () => { setShow(false) }
    const handleShow = () => {
        setShow(true)
           
    }
    
    
  const navigate = useNavigate();
  const lgn = () => {

      navigate('/EventDetailsforGSTbill')
  }

    return (
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',wishlistAdd),
      
      <div style={{width:'100%'}}>
<GameHeader />
            <div >
                <img style={{ height: '25%', width: '35%', paddingTop: 15 }}
                    src={product.image} />
                <h5 style={{paddingTop:15}}>{product.title}</h5>
                <text>(Product ID: { product.id })</text>
            </div>
            
            <div style={{ width: '100%' }}>
                <Row xs={1} md={5} className="g-4" style={{ paddingLeft: 20, 
                    paddingRight: 20, paddingTop: 15 }} >
                    {Subcat.Games.map((a) =>
                            <Col>
                                <Card>
                                    <Card.Img 
                                    style={{ 
                                    alignSelf: "center", paddingTop: 20,borderRadius:0,
                                    paddingBottom:22,paddingLeft:5,paddingRight:5 }} 
                                    src={a.image} />
                                </Card>
                            </Col>
                    )}
                </Row>
            </div>
            <div style={{flex:1,paddingTop:15}}>
                <text style={{fontWeight:'bold',fontSize:17}}> Rent: ${product.price}</text>
            </div>
            
            <div style={{justifyContent:"space-between",paddingTop:15}}>
                <button onClick={handleShow}
                    style={{
                        borderRadius: 5, width: 200, height: 39,
                backgroundColor:"grey",borderWidth:0,marginRight:50,color:'white'
                //     border-radius: 6px; border-width: 1;width: 200px;
                // margin-left: 50px;margin-right: 50px;
            }}
              
            
                    //onClick={() => alert('Success\n Item Added to cart successfully')}
                >
                <FontAwesomeIcon icon={faHeart} />
                &nbsp;
                    Add to Wishlist </button>
                
                <Link to={`/cartPage/${product.id}`}>
                    <button className='addCart' onClick={handleShow}
                // style={{marginRight:'10%',backgroundColor:"rgb(99, 195, 165)",
                //     borderWidth: 0, borderRadius: 4, height: 40, width: 200
                // }}
               
                    // ()=>alert('Success\n Item Added to cart successfully')}
                >
                    <FontAwesomeIcon icon={faCartArrowDown} />&nbsp;
                   
                        Add to Cart </button>
                    </Link>
            </div>

            <Modal style={{ left: 0 }} show={showModal} onHide={handleClose}>


                <Modal.Body>
                    <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", marginTop: '3%' }} >
                        <h5>Item Added to your Wishlist</h5>
                    </div>
                    <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} >
                        <input
                            style={{ width: 280, height: 42, marginTop: '6%', borderRadius: 5, borderWidth: 1 }}
                                //onClick={handleChanges}
                                onChange={handleChanges}
                            placeholder="    Enter Your Wishlist Name"
                        >
                         
                        </input>
                    </div>
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", marginTop: '5%' }} >
                        <Link to={`/WishList/${product.id}`}>
                                <button onClick={() => setName(tmpName)}
                                    style={{ width: 100, height: 42, marginTop: '5%', borderRadius: 6, borderWidth: 0, backgroundColor: "rgb(99, 195, 165)" }}>
                             +Add
                            </button></Link>
                    </div>
                        {/* <div style={{ marginLeft: "32%", marginRight: "32%" }}>
                            <text> Do you need GST bill ? </text>
                        </div>
                        <br></br>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
                            <button onClick={lgn} className='GSTbill'> Yes </button>
                            <button onClick={lgn} className='GSTbill'> No</button>
                        </div>
                    </div> */}

                </Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
            </Modal>



            <div style={{ marginBottom: '2%' }}>
                <br></br>
                <br></br><br></br>
            </div>

         

      </div>
  )
}

