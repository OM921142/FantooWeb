import React,{ useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./GameHeader.css";
import Icon from "@mui/material/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowRightArrowLeft, faBackward, faBalanceScale, faBars, faBookOpen, faCartArrowDown, faClipboardList, faCross, faHome, faLineChart, faListCheck, faMoneyCheck, faRightFromBracket, faRightLeft, faSearch, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { faHeart, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from 'react-router-dom'
import { color, fontSize } from "@mui/system";

export default function Header() {
  const [showModal, setShow] = useState(false); 
  const handleClose = () => 
{  setShow(false)}
  const handleShow = () => {setShow(true)}
  const navigate = useNavigate();
  const lgn = () => {
      navigate('/Home')
  }
  const lgnn = () => {
    navigate('/WishList')
}

  return (
    <div>

      <div >
        <Navbar className="color-nav" variant="light">
          {/* <button onClick={lgn} 
          style={{borderWidth:0,paddingLeft:20,fontSize:25,
          background:'rgb(99, 195, 165)'}} >
          <FontAwesomeIcon icon={faArrowLeft} size='10px' style={{marginLeft:'2%',
          color:'white'}} />
          </button> */}
         

         <button onClick={lgn} style={{borderWidth:0,paddingLeft:20,fontSize:20,color:'white',
          background:'rgb(99, 195, 165)'}} >
          <FontAwesomeIcon icon={faX} size='10px'/>
          </button>
         
          <div style={{marginLeft:5}}>
        <button  style={{borderWidth:0,fontSize:25,color:'white',marginTop:-5,
          background:'rgb(99, 195, 165)'}}>
       <text>| </text>
        </button>
        </div>
          <div style={{marginRight:'0%',color:'white',fontSize:25}}>
        <button onClick={lgn} style={{borderWidth:0,paddingLeft:10,fontSize:25,color:'white',
          background:'rgb(99, 195, 165)'}}>
        <FontAwesomeIcon icon={faArrowLeft} size='25px' />
        </button>
        </div>
        <div style={{marginRight:'0%',color:'white',fontSize:25,}}>
        <button  style={{borderWidth:0,paddingLeft:5,fontSize:25,color:'white',marginBottom:5,
          background:'rgb(99, 195, 165)'}}>
       <text> | </text>
        </button>
        </div>
          
          <div style={{marginRight:'1%',color:'white',fontSize:25}}>
        <button  style={{borderWidth:0,paddingLeft:10,fontSize:25,color:'white',
          background:'rgb(99, 195, 165)'}}>
        <FontAwesomeIcon icon={faArrowRight} size='25px' />
        </button>
        </div>



          <text
            placeholder=" Search.."
            style={{
              
              height: 35,
              width: "57%",
              marginBottom: 5,
              marginTop: 5,
              borderRadius: 5,
              marginRight: '5%',
              marginLeft: '10%',
              borderWidth: 0, borderColor: "rgb(99, 195, 165)",
              color:'white',fontSize:25
            }}
          >
            
          </text>
         <div style={{marginRight:'1%',color:'white',fontSize:25}}>
         <button onClick={lgn} style={{borderWidth:0,paddingLeft:20,fontSize:25,color:'white',
          background:'rgb(99, 195, 165)'}}>
         <FontAwesomeIcon icon={faHome} size='20px' />
         </button>
         </div>
         <div style={{marginRight:'1%',color:'white' ,fontSize:25}}>
         <button onClick={lgnn} style={{borderWidth:0,paddingLeft:20,fontSize:25,color:'white',
          background:'rgb(99, 195, 165)'}}>
         <FontAwesomeIcon icon={faHeart} />
         </button>
         </div>
          
        <div style={{marginRight:'1%',color:'white',fontSize:25}}>
        <button  style={{borderWidth:0,paddingLeft:20,fontSize:25,color:'white',
          background:'rgb(99, 195, 165)'}}>
        <FontAwesomeIcon icon={faCartArrowDown} size='25px' />
        </button>
        </div>
         
        <div style={{marginRight:'1%',color:'white',fontSize:25}}>
        <button  style={{borderWidth:0,paddingLeft:20,fontSize:25,color:'white',
          background:'rgb(99, 195, 165)'}}>
        <FontAwesomeIcon icon={faSearch} size='25px' />
        </button>
        </div>

        </Navbar>
      </div>
      <div>
      <Modal style={{left:0}} show={showModal} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor:'rgb(99, 195, 165)' }}>
            <Modal.Title>
              <span
                style={
                  {
                    display: 'flex', flex: 1,
                    padding: 10,
                    marginBottom: '0.5%', marginLeft: '0.5%',
                  }
                }>
                  <button onClick={() => this.routeChange} style={{
                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                  width: '100%', borderWidth: 0, borderBottomWidth: 0, backgroundColor: 'rgb(99, 195, 165)'
                  }}>
                    <span style={{
                      width: "100%",
                      justifyContent: "center",
                    }}>
                      <img style={{
                        display: 'flex',
                      marginLeft: '1%', marginBottom: 15, backgroundColor: "black",
                        
                     
                    }}/>
                    <div style={{
                      width: 100, height: 100, backgroundColor: 'rgb(99, 195, 165)',
                      borderRadius: "50%", backgroundColor:'white'
}}>
                      <FontAwesomeIcon style={{
                        alignSelf: "center",
                        alignItems: "center", justifyContent: "center", paddingTop: 20, color:'rgb(99, 195, 165)',
                       
                      }} icon={faUser} size='2x' />
                    
                      
                    </div>
                      
                    </span>
                    <span style={{
                      justifyContent: "center",
                      flex: 1,
                      paddingLeft: 10,
                      marginLeft: 80
                    }}>
                      <text style={{
                        display: "flex", marginLeft: "-30%", marginBottom: 15,color:'white'
                      }}>
                       Name :
                    </text>
                    <div><text style={{
                      display: "flex", marginLeft: "-30%", marginBottom: 15, color: 'white'
                    }}>Address : </text></div>
                    </span>
                    <span style={{

                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}>
                      {/* <FontAwesomeIcon icon={faChevronRight} /> */}
                    </span>
                  </button>
                
              </span>
            
            
            
            
            </Modal.Title>
        
          
          
          
          
          
          </Modal.Header>
       
          <Modal.Body>          
   <div style={{marginBottom:"5%"}}>
              <div style={{ marginBottom: "5%" }}>
                


                
              <button className="buttonsSelect">
                  <Nav.Link as={Link} to="/">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                    <text style={{ marginLeft: 15, fontSize: 22 }}>Home</text>
                  </Nav.Link>  </button>  
    </div>
              <div style={{ marginBottom: "5%" }}><button className="buttons">
                <Nav.Link as={Link} to="/Catalogue">
      <FontAwesomeIcon icon={faBookOpen} size="2x"/>
      <text style={{marginLeft:15,fontSize:22}}>Catalogue </text>
     </Nav.Link> </button></div>
     
              <div style={{ marginBottom: "5%" }}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/WishList">
                  <FontAwesomeIcon icon={faHeart} size="2x" />
                    <text style={{ marginLeft: 15, fontSize: 22 }}> Wishlist</text>
                </Nav.Link></button>
    </div>
    <div style={{marginBottom:"5%"}}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/manageOrder">
    <FontAwesomeIcon icon={faMoneyCheck}size="2x" />
                    <text style={{ marginLeft: 15, fontSize: 22 }}> Manage Orders</text>
                </Nav.Link></button>
    </div>
    <div style={{marginBottom:"5%"}}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/Billing">
    <FontAwesomeIcon icon={faClipboardList} size="2x"/>
                    <text style={{ marginLeft: 15, fontSize: 22 }}> Billings</text>
                </Nav.Link></button>
    </div>
    <div style={{marginBottom:"5%"}}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/Payment">
    <FontAwesomeIcon icon={faMoneyBill1} size="2x"/>
                    <text style={{ marginLeft: 15, fontSize: 22 }}> Payments</text>
                </Nav.Link></button>
    </div>
    <div style={{marginBottom:"5%"}}>
                <button onClick={()=>alert('Log Out Succesfully') } className="buttons">
                  <Nav.Link as={Link} to="/">
    <FontAwesomeIcon icon={faRightFromBracket}size="2x" />
                    <text style={{ marginLeft: 15, fontSize: 22 }}>Log out</text>
                </Nav.Link></button>
    </div>
   </div>
          
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
      </div>
    </div>
  );
}