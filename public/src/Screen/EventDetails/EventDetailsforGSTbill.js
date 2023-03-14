import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCross, faHouse, faX } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './EventDetailsforGSTbill.css'
import EventDetHeader from './EventDetHeader'
export default function EventDetailsforGSTbill() {
    const [showModal, setShow] = useState(false); 
    const [modalShow, setModalShow] = useState(false); 
   const handleClose = () => 
 {  setShow(false)}
   const handleShow = () => {setShow(true)}

   const modalhandleClose = () => 
 {  setModalShow(false)}
   const modalHandleShow= () => {setModalShow(true)}
   
   const navigate = useNavigate();
   const lgn = () => {
       navigate('/Home')
   }
   const logn = () => {
    navigate('/EventDetailsforGSTbill')
}
   const confirm = () => {
// alert('')
navigate('/manageOrder')
   } 
   
  return (
    <div style={{backgroundColor: '#eee',flex:1}}>
          <EventDetHeader />
          {/* // */}
          <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', marginRight:'1%',marginTop:'2%',
            padding: 10,borderBottom:'1px solid #ddd',marginLeft:'20%',marginRight:'20%',
            backgroundColor:'white'
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Company Name: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%", width: "266%",borderWidth:0
                
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}></text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>

            </span>
          </div>
        </div>
        {/* // */}
        <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',marginRight:'1%',
            padding: 10,borderBottom:'1px solid #ddd',marginLeft:'20%',marginRight:'20%',
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> GST Number: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%", width: "266%",borderWidth:0
                
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}></text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>

            </span>
          </div>
        </div>
 {/* // */}
 <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',marginRight:'1%',
            padding: 10,borderBottom:'1px solid #ddd',marginLeft:'20%',marginRight:'20%',
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Billing Address: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%", width: "266%",borderWidth:0
                
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}></text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>

            </span>
          </div>
        </div>
 {/* // */}

<br></br>
 <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',marginRight:'1%',
            padding: 10,borderBottom:'1px solid #ddd',marginLeft:'20%',marginRight:'20%',
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Contact Number: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%", width: "266%",borderWidth:0
                
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}></text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>

            </span>
          </div>
</div>

 {/* // */}
 <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',marginRight:'1%',
            padding: 10,borderBottom:'1px solid #ddd',marginLeft:'20%',marginRight:'20%',
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Email Address: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%", width: "266%",borderWidth:0
                
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}></text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>

            </span>
          </div>
</div>
 {/* // */}

 <br></br>
 <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',marginRight:'1%',
            padding: 10,borderBottom:'1px solid #ddd',marginLeft:'20%',marginRight:'20%',
          }}>
            <span style={{
              width: "30%",
              justifyContent: "center",marginLeft:'20%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Alternate Contact Person: </text>
            </span>
           
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}></text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
<button onClick={handleShow} style={{borderWidth:1}}><FontAwesomeIcon icon={faAdd} /></button>
            </span>
            <span style={{
              width: "1%",
              justifyContent: "center",marginLeft:'10%'
            }}></span>
          </div>
</div>
     
{/* // */}
<div style={{display:'flex',alignContent:'center',justifyContent:'center',}}>
    <button onClick={lgn} className="Previous"
    //  style={{backgroundColor:'rgb(99, 195, 165)',marginRight:'10%',marginTop:'3%',
    // borderWidth:0,borderRadius:7,width:'20%',height:40,color:'white'}}
    > Previous </button>
    <button  className="Previous " onClick={ modalHandleShow} 
   
 > Confirm </button>
</div>
{/* // */}
<Modal style={{left:0}} show={showModal} onHide={handleClose}>
{/* <Modal.Header closeButton></Modal.Header>   */}
          <Modal.Body closeButton>          
 <div style={{marginTop:'10%',marginBottom:'10%',marginLeft:'2%'}} >
 <div style={{display:'flex'}}>
    <text> Name:</text>
    <input style={{width:'72%',marginLeft:'6%'}}></input>
 </div>
 <div style={{display:'flex',marginTop:'8%'}}>
    <text>Mobile:</text>
    <input style={{width:'73%',marginLeft:'4%'}}></input>
 </div>
 <div style={{display:'flex',marginTop:'8%'}}>
    <text> Email:</text>
    <input style={{width:'73%',marginLeft:'6%'}}></input>
 </div>
 <div style={{display:'flex',alignContent:'center',justifyContent:'center',paddingTop:'5%'}}>
 <button onClick={logn} style={{backgroundColor:'rgb(99, 195, 165)',
 color:'white',width:'35%',borderWidth:0,borderRadius:7,height:35}}> Save</button>
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



      <Modal style={{left:0}} show={modalShow} onHide={modalhandleClose}>
{/* <Modal.Header closeButton></Modal.Header>   */}
          <Modal.Body>          
 <div style={{marginTop:'8%',marginBottom:'8%'}}>
 <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
    <text style={{fontWeight:'bold',fontSize:18}}> Thank You for Yoru Query ! </text>
 </div>
 <div  style={{marginTop:'3%',marginLeft:'3%',marginRight:'3%'}}>
    <text style={{marginTop:2}}>
        Your Query Form  will be review shortly and a response will be made to you.
        We appreciate your patience. Let us know if there is anything else we can help you with.
    </text>
 </div>
 <div style={{display:'flex',alignItems:"center",justifyContent:'center',
 marginTop:'5%'}}>
    <button onClick={confirm} className='manageEnq' > Manage Enquiry </button>
 </div>
 </div>
          </Modal.Body> 
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={modalhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalhandleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>



      <div style={{marginBottom:'2%',backgroundColor: '#eee',}}>
          <br></br>
          <br></br><br></br>
       </div>
      
</div>
  )
}
