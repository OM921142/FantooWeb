import React,{ useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";
import Icon from "@mui/material/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBars, faBookOpen, faCartArrowDown, faClipboardList, faHome, faListCheck, faMoneyCheck, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { faHeart, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from 'react-router-dom'

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       {/* <Modal.Header >
//         <Modal.Title id="contained-modal-title-vcenter">
        
          
//           <button>
//             <text> Back </text>
//           </button>
//         </Modal.Title>
//       </Modal.Header> */}
//       <Modal.Body>
//         <h4 style={{ display: 'flex', alignItems:"center",justifyContent:'center'}}>   Logged out successfully</h4>
//         <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center',marginTop:'4%' }}>
//           <Nav.Link as={Link} to="/">
//             <Button style={{ width: 120, backgroundColor: "rgb(99, 195, 165)", borderColor: "rgb(99, 195, 165)" }} 
//               onClick={props.onHide}>
//               <text style={{fontSize:18}}>Close</text>
//             </Button></Nav.Link>
//        </div>
//       </Modal.Body>
//       {/* <Modal.Footer>
//         <Nav.Link as={Link} to="/">
//         <Button onClick={props.onHide}>Close</Button></Nav.Link>
//       </Modal.Footer> */}
//     </Modal>
//   );
// }





export default function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [showModal, setShow] = useState(false); 
  const handleClose = () => 
{  setShow(false)}
  const handleShow = () => {setShow(true)}
  const navigate = useNavigate();
  const lgn = () => {
      navigate('/')
  }

  return (
    <div>

      <div >
        <Navbar className="color-nav" variant="light">
          <button style={{borderWidth:0,paddingLeft:20,color:'white',fontSize:19,
            background: 'rgb(99, 195, 165)'
          }}
            onClick={handleShow}
            //  onClick={() => setModalShow(true)}
          
          >
          <FontAwesomeIcon icon={faBars} size='10px' style={{marginLeft:'1%'}} />
          </button>
         
          <input
            placeholder=" Search.."
            style={{
              
              height: 35,
              width: "75%",
              marginBottom: 5,
              marginTop: 5,
              borderRadius: 5,
              marginRight: '3%',
              marginLeft: '2%',
              borderWidth: 0, borderColor: "rgb(99, 195, 165)",
            }}
          >
            
          </input>
          <div style={{color:'white',fontSize:20,}}>
          <FontAwesomeIcon icon={faCartArrowDown} size='15px' />
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
                    <text style={{ marginLeft: 30,fontSize: 22 }}> Billings</text>
                </Nav.Link></button>
    </div>
    <div style={{marginBottom:"5%"}}>
                <button className="buttons">
                  <Nav.Link as={Link} to="/Payment">
    <FontAwesomeIcon icon={faMoneyBill1} size="2x"/>
                    <text style={{ marginLeft: 20, fontSize: 22 }}> Payments</text>
                </Nav.Link></button>
    </div>
    <div style={{marginBottom:"5%"}}>
                <button className="buttons"
                  //onClick={() => setModalShow(true)}
                  onClick={lgn}
                  >
                  
                  <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
                  <text style={{ marginLeft: 31, fontSize: 22 }}>Log out</text>
                
                </button>

                    {/* <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />    */}
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
