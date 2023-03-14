import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import Data from '../SubCatagory/SubCat.json'
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import './EventDetails.css'
import EventDetHeader from './EventDetHeader'
export default function EventDetails() {
  
    const value = useParams();
    console.log("in subtrtrcat", value);
    let product = Data.Games.find((data) => data.title === value.cart)
    console.log('jkjjkj',product);

   //
   const [showModal, setShow] = useState(false); 
   const handleClose = () => 
 {  setShow(false)}
   const handleShow = () => {setShow(true)}
   
    const navigate = useNavigate();
    const lgn = () => {

        navigate('/EventDetailsforGSTbill')
    }

    
  return (
    <div style={{backgroundColor: '#eee',}}>
      <EventDetHeader />
 
      <div style={{marginTop:'3%',marginRight:15,marginLeft:'21%',marginRight:'18%'}}>
        <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            alignItems:'center',marginTop:'1%',
            justifyContent:'center',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',
            padding: 10,borderBottomWidth:1,borderBottom:'1px solid #ddd'
            // border:' 2px solid #ddd',
            // borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'2%'
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Event Start: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%", 
                width: "90%",borderWidth:0
           
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '40%', marginBottom: 15
              }}> Time: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-85%", 
                width: "80%",borderWidth:0,
              
              }} />
            </span>
          </div>
        </div>
        {/* // */}
        <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',
            padding: 10,borderBottom:'1px solid #ddd'
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%',
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Event End: </text>
            </span>
            <span style={{
              justifyContent: "center",marginLeft:'20%',
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%", width: "80%",borderWidth:0
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '-10%', marginBottom: 15
              }}> Time: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-85%", width: "80%",borderWidth:0
              }} />
            </span>
          </div>
        </div>
        {/* // */}
        <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',borderBottom:'1px solid #ddd',
            padding: 10,
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%',
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Set up: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15, marginLeft: "-55%", width: "80%",
                borderWidth:0,
              }} />
            </span>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '-10%', marginBottom: 15
              }}> Time: </text>
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <input style={{
                display: "flex", marginBottom: 15,backgroundColor: 'white', marginLeft: "-85%", width: "80%",borderWidth:0
              }} />
            </span>
          </div>
        </div>
        {/* // */}
        <div>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%', backgroundColor: 'white',borderBottom:'1px solid #ddd',
            padding: 10,
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%',
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> # of Guests: </text>
            </span>
            <span style={{
              justifyContent: "center",marginLeft:'20%',
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
            flex: 1, marginLeft: '1%', backgroundColor: 'white',
            borderBottom:'1px solid #ddd',
            padding: 10,
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",marginLeft:'20%',
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}> Event Type: </text>
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
      </div>
      
      {/* // */}
      <div>
        <div style={{ marginRight: 11,marginLeft:'15%',marginRight:'15%' }}>
          <div style={{
            alignItems: 'center', justifyContent: 'center', display: 'flex',
            flex: 1, marginLeft: '1%',
            padding: 10,
          }}>
            <span style={{
              width: "20%",
              justifyContent: "center",
            }}>
              <text style={{
                display: 'flex',
                marginLeft: '1%', marginBottom: 15
              }}>  </text>
            
            </span>
            <span style={{
              justifyContent: "center",
              flex: 1,
              paddingLeft: 10,
              marginLeft: 80
            }}>
              <text style={{
                display: "flex", marginBottom: 15, marginLeft: "-25%"
              }}></text>
            </span>
            <span style={{

              justifyContent: "flex-end",
              alignItems: "center",
            }}>


            </span>
          </div>
        </div>
      </div>
      {/* // */}



{/* // */}

      <div style={{ marginRight: 10, marginLeft: '21%', marginRight: '18%' }}>
        <div style={{
          alignItems: 'center', justifyContent: 'center', display: 'flex',
          flex: 1, marginLeft: '1%', backgroundColor: 'white',marginTop:-15,
          padding: 10,borderBottom:'1px solid #ddd',
        }}>
          <span style={{
            width: "40%",
            justifyContent: "center",marginLeft:'2%'
          }}>
            <text style={{
              display: 'flex',
              marginLeft: '1%', marginBottom: 15
            }}> Special Instructions: </text>
          </span>
          <span style={{
            justifyContent: "center",
            flex: 1,
            paddingLeft: 10,
            marginLeft: 80
          }}>
            <input style={{
              display: "flex", marginBottom: 15, marginLeft: "-55%", 
              borderWidth:0
            }} /><input style={{
              display: "flex", marginBottom: 15, marginLeft: "-55%", 
              borderWidth:0
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
      <div  style={{marginRight:11,marginLeft:'15%',marginRight:'15%',}}>
        <div style={{
          alignItems: 'center', justifyContent: 'center', display: 'flex',
          flex: 1, marginLeft: '1%',
          padding: 10,
        }}>
          <span style={{
            width: "20%",
            justifyContent: "center",marginLeft:'20%'
          }}>
            <text style={{
              display: 'flex',
              marginLeft: '1%', marginBottom: 15
            }}>  </text>
          
          </span>
          <span style={{
            justifyContent: "center",
            flex: 1,
            paddingLeft: 10,
            marginLeft: 80
          }}>
            <text style={{
              display: "flex", marginBottom: 15, marginLeft: "-25%"
            }}></text>
          </span>
          <span style={{

            justifyContent: "flex-end",
            alignItems: "center",
          }}>


          </span>
        </div>
     </div>
      
      
      
      
      
      <div style={{
        alignItems: 'center', justifyContent: 'center', display: 'flex',
        flex: 1, marginLeft: '21%', marginRight: '18%',
        padding: 10, backgroundColor: "white", 
        borderBottom:'1px solid #ddd',
      }}>
        <span style={{
          width: "20%",marginLeft:'15%',marginRight:'15%',
          justifyContent: "center",marginLeft:'2%'
        }}>
          <img style={{
            display: 'flex',marginLeft:'15%',marginRight:'15%',
            marginLeft: '1%', marginBottom: 15
          }} src={product.image}></img>
        </span>
        <span style={{
          justifyContent: "center",
          flex: 1,
          paddingLeft: 10,
          marginLeft: 80
        }}>
          <text style={{
            display: "flex", marginBottom: 15,
            marginLeft: "-155%"
          }}>{product.title}</text></span>
        <span style={{

          //justifyContent: "flex-end",
          //alignItems: "center",
        }}>
          <text style={{ marginRight: 50 }}> $ {value.price}</text>

        </span>
        <span style={{
          width: "15%",
          justifyContent: "center",
        }}></span>
      </div>

{/* // */}
<div  style={{marginRight:11,marginLeft:'15%',marginRight:'15%',}}>
        <div style={{
          alignItems: 'center', justifyContent: 'center', display: 'flex',
          flex: 1, marginLeft: '1%',
          padding: 10,
        }}>
          <span style={{
            width: "20%",
            justifyContent: "center",
          }}>
            <text style={{
              display: 'flex',
              marginLeft: '1%', marginBottom: 15
            }}> 
            {/* Payment Method:  */}
            </text>
            {/* <img style={{
            display: 'flex',
            marginLeft: '1%', marginBottom: 15
          }} src={product.image}></img> */}
          </span>
          <span style={{
            justifyContent: "center",
            flex: 1,
            paddingLeft: 10,
            marginLeft: 80
          }}>
            <text style={{
              display: "flex", marginBottom: 15, marginLeft: "-25%"
            }}></text>
          </span>
          <span style={{

            justifyContent: "flex-end",
            alignItems: "center",
          }}>


          </span>
        </div>
     </div>
{/* // */}

      <div style={{ marginRight: 10, marginLeft: '21%', marginRight: '18%', }}>
        <div style={{
          alignItems: 'center', justifyContent: 'center', display: 'flex',
          flex: 1, marginLeft: '1%', backgroundColor: 'white',marginTop:-15,
          padding: 10,borderBottom:'1px solid #ddd',
        }}>
          
          <span style={{
            width: "20%",
            justifyContent: "center",paddingBottom:'1%',
          }}>
            <text style={{
              display: 'flex',
              marginLeft: '1%', marginBottom: 15
            }}>Payment Method:</text>
             <span style={{marginRight:'0%'}}>
            <input type="radio" id="Cheque" name="fav_language" value="Cheque"></input>
  <label for="Cheque">Cheque</label></span>
          </span>
          <span style={{
            justifyContent: "center",
            flex: 1,
            paddingLeft: 10,
            marginLeft: 80
          }}>
            {/* <input style={{
              display: "flex", marginBottom: 15, marginLeft: "-55%", width: "266%"
            }} /> */}
             <text style={{
              display: 'flex',
              marginLeft: '10%', marginBottom: 15,marginTop:15
            }}> </text>
          <span style={{marginRight:'50%'}}>
          <input type="radio" id="Online" name="fav_language" value="Online"></input>
  <label for="Online">Online</label>
          </span>
          </span>
          <span style={{
            width: "20%",
            justifyContent: "center",paddingBottom:'1%'
          }}>
            <text style={{
              display: 'flex',
              marginLeft: '10%', marginBottom: 15,marginTop:35
            }}></text>
            <span style={{marginRight:'0%'}}>
            <input type="radio" id="Cash" name="fav_language" value="Cash"></input>
  <label for="Cash">Cash</label></span>
            
          </span>
          <span style={{
            justifyContent: "center",
            flex: 1,
            paddingLeft: 10,
            marginLeft: 80,marginTop:22
          }}>
            <text style={{
              display: 'flex',
              marginLeft: '1%', marginBottom: 15,
            }}></text>
            <span style={{marginRight:'50%'}}>
<input type="radio" id="UPI" name="fav_language" value="UPI"></input>
  <label for="UPI"> UPI</label></span>
          </span>
        </div>
       
        <span style={{marginRight:-80}}></span>
      </div>      


{/* // */}

{/* // */}
<br></br>
{/*     */}
<div style={{
        alignItems: 'center', justifyContent: 'center', display: 'flex',
        flex: 1, marginLeft: '1%',
        padding: 10, backgroundColor: "white", marginRight: 11, marginLeft: '21%', marginRight: '18%',
      }}>
        <span style={{
          width: "20%",
          justifyContent: "center",marginLeft:'2%'
        }}>
          {/* <img style={{
            display: 'flex',
            marginLeft: '1%', marginBottom: 15
          }} src={product.image}></img> */}
          <text style={{
            display: 'flex',flexDirection:'row',
            marginLeft: '1%', marginBottom: 15
          }}>Sub Total:</text>

          {/* <text style={{
            display: 'flex',
            marginLeft: '1%', marginBottom: 15
          }}>$ {value.price}</text> */}
          {/* // */}
          <text style={{
            display: 'flex',
            marginLeft: '1%', marginBottom: 15
          }}>Transport Charges:</text>
          <text style={{
            display: 'flex',
            marginLeft: '1%', marginBottom: 15
          }}>GST Ammount:</text>
          <text style={{ display: 'flex',
            marginLeft: '1%', marginBottom: 15,fontWeight:"bold"}}>Total Ammount:</text>
        </span>
        <span style={{
          justifyContent: "flex-end",
          flex: 1,
     
        }}>
          {/* <text style={{
            display: "flex", marginBottom: 15, marginLeft: "-25%"
          }}>{product.title}</text> */}
          </span>
        <span style={{
          display: "flex",
          justifyContent:"flex-end"
        }}>
          <text style={{ marginTop: -65 }}> $ {value.price} </text><br></br>
          <text style={{ marginRight: 0, marginTop: -32 }}> $ 0 </text><br></br><br></br>
          <div>
            <text style={{ marginTop: 10 }}> $ 0 </text><br></br>
            <text style={{ fontWeight: 'bold', marginTop: 10 }}> $ {value.price} </text>
          </div>
          {/* <text style={{ marginRight: 50,marginTop: -35}}> $ </text><br></br>
          <text style={{ marginRight: 50,marginBottom: 35 }}> $ 0</text><br></br>
          <text style={{ marginRight: 50 }}> $ 0</text><br></br>
          <text style={{ marginRight: 50,fontWeight:'bold' }}> $ {value.price} </text> */}
        </span>
        <span style={{
          width: "15%",
          justifyContent: "center",
        }}></span>
      </div>

{/* // */}
<br></br><br></br>

{/* <div style={{
        alignItems: 'center', justifyContent: 'center', display: 'flex',
        flex: 1, marginLeft: '1%',
        padding: 10, backgroundColor: "#eee", marginRight: 11
      }}>
        <span style={{
          width: "20%",
          justifyContent: "center",
        }}>
        
           <text style={{
            display: 'flex',
            marginLeft: '1%', marginBottom: 15
          }}>Sub Total:</text>
        </span>
        <span style={{
          justifyContent: "center",
          flex: 1,
          paddingLeft: 10,
          marginLeft: 80
        }}>
          
          </span>
        <span style={{

          justifyContent: "flex-end",
          alignItems: "center",
        }}>
          <text style={{ marginRight: 50 }}> $ {product.price}</text>

        </span>
      </div> */}
      {/* <div style={{
        alignItems: 'center', justifyContent: 'center', display: 'flex',
        flex: 1, marginLeft: '1%',
        padding: 10, backgroundColor: "#eee", marginRight: 11
      }}>
        <span style={{
          width: "20%",
          justifyContent: "center",
        }}>
       
            <text style={{
            display: 'flex',
            marginLeft: '1%', marginBottom: 15
          }} >Transport Charges:</text>
        </span>
        <span style={{
          justifyContent: "center",
          flex: 1,
          paddingLeft: 10,
          marginLeft: 80
        }}>
         
          </span>
        <span style={{

          justifyContent: "flex-end",
          alignItems: "center",
        }}>
          <text style={{ marginRight: 50 }}> $ 0</text>

        </span>
      </div> */}

      {/* <div style={{
        alignItems: 'center', justifyContent: 'center', display: 'flex',
        flex: 1, marginLeft: '1%',
        padding: 10, backgroundColor: "#eee", marginRight: 11
      }}>
        <span style={{
          width: "20%",
          justifyContent: "center",
        }}>
         
            <text style={{
            display: 'flex',
            marginLeft: '1%', marginBottom: 15
          }} >GST Ammount::</text>
        </span>
        <span style={{
          justifyContent: "center",
          flex: 1,
          paddingLeft: 10,
          marginLeft: 80
        }}>
          
          </span>
        <span style={{

          justifyContent: "flex-end",
          alignItems: "center",
        }}>
          <text style={{ marginRight: 50 }}> $ 0</text>

        </span>
      </div> */}













<div style={{backgroundColor: '#eee',}}>
              {/* <Link to={`/EventDetails/${product.title}`}> */}
              <button className='SendEnquiry' onClick={handleShow}
              // style={{width:'60%',height:40,borderWidth:0,borderRadius:5,
              // backgroundColor:'rgb(99, 195, 165)'}}
              > 
             <text style={{fontSize:21,color:'white'}}> Send Enquiry </text>
              </button>
                {/* </Link> */}
                </div>





{/* <div style={{display:'flex'}}>
<input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">HTML</label><br></br>
  <input type="radio" id="css" name="fav_language" value="CSS"></input>
  <label for="css">CSS</label><br></br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
  <label for="javascript">JavaScript</label>
</div> */}


<Modal style={{left:0}} show={showModal} onHide={handleClose}>
        
       
          <Modal.Body>          
 <div style={{marginTop:'10%',marginBottom:'10%'}} >
 <div style={{marginLeft:"32%",marginRight:"32%"}}>
 <text> Do you need GST bill ? </text>
 </div>
  <br></br>
  <div style={{display:"flex",alignItems:'center',justifyContent:"center"}}>
<button onClick={lgn} className='GSTbill'> Yes </button>
<button onClick={lgn} className='GSTbill'> No</button>
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



{/* 
      /// */}
      <div style={{ marginBottom: '2%' }}>
        <br></br>
        <br></br><br></br>
      </div>
    </div>
  )
}





// import React, { Component } from 'react'
// import EventDetHeader from './EventDetHeader'
// import './EventDetails.css'
// export default class EventDetails extends Component {

// constructor (props){
//   super(props);
//   this.state={
//     mode: "",
//     selectedate: "",
//     changetime: "",
//   }
// }


//   showDatePicker = (mode, data) => {
//     this.setState({ isDatePickerVisible: true, mode: mode, changetime: data });
//   };
//   showTimePicker = (mode, data, date) => {
//     this.setState({
//       isTimePickerVisible: true,
//       mode: mode,
//       selectedate: date,
//       changetime: data,
//     });
//   };
//   hideDatePicker = () => {
//     this.setState({ isDatePickerVisible: false, isTimePickerVisible: false });
//   };

//   render() {
//    return (
//       <div>
//         <EventDetHeader />
//         <div style={{display: "flex", flexDirection:"column", height: "100vh"}}>
//        <div style={{flex:1,backgroundColor:'#eee'}}> 
//      <div style={{paddingHorizontal: 8,
//     backgroundColor: "white",
//     borderRadius: 4,
//     margin: 10,
//     marginHorizontal: 5,}}>
//       <div style={{display:'flex',   
//       marginTop: 0,
//     flexDirection: "row",
//     marginBottom: 0,
//     borderBottomWidth: 0.6, height: 45,
//     borderBottomColor: "#cfcfcf",}}>
        
//         <div style={{ width: "47%",
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//     justifyContent: "center",borderTopLeftRadius: 5,
//     marginTop: 0,}}>
//           <text style={{fontSize: 16,alignSelf: "center",
//     color: 'black',
//     marginBottom: 0,}}> Event Start: </text>
//         </div>
        
//         <div style={{ flexDirection: "row",display:"flex",
//     width: "37%",
//     marginLeft: 0,
//     backgroundColor: "#fff",
//     marginTop: 0,
//     justifyContent: "space-evenly",
//     // paddingTop: 6,
//     paddingBottom: 6,}}>
// <button style={{width: "10%",marginRight:150,borderWidth:0,backgroundColor:'white',
//     paddingTop: 2,}}
//     //onClick={() => this.showDatePicker("date", "setup")}
//     >
//       <input/>
// <text style={{ alignSelf: "center",
//     marginVertical: 2,}}>
//        {/* {showDateAsClientWant(this.state.setup_timestamp)} */}
//     </text>
// </button>
// <div style={{  width: "2%",
//     borderRightWidth: 0.3,
//     alignSelf: "center",
//     height: 23,marginRight:35,
//     borderLeftColor: "#444",
//     opacity: 0.4,}}></div>
     
//      <text style={{ alignSelf: "center",
//     marginVertical: 2,}}>Time</text>

// <button style={{width: "20%", marginLeft:15,borderWidth:0,backgroundColor:'white',
//     paddingTop: 2,}}>
//   {/* <text style={{ alignSelf: "center",
//     marginVertical: 2,}}>time</text> */} <input/>
// </button>
//     </div>
//       </div>


// /
// <div style={{ marginTop: 0,
//     flexDirection: "row",display:'flex',
//     marginBottom: 0,
//     borderBottomWidth: 6,height: 45,borderBottom:'1px solid black',
//     borderBottomColor: "#cfcfcf", }}>

// <div style={{ width: "47%",
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//     justifyContent: "center",borderBottomLeftRadius: 5 ,
//     marginTop: 0,}}>
// <text style={{ marginBottom: 0,}}># of Guest:</text>
// </div>
// <div style={{display:'flex',
//     width: "53%",
//     marginLeft: 0,
//     backgroundColor: "#fff",
//     marginTop: 0,
//     justifyContent: "space-evenly",
//     // paddingTop: 6,
//     paddingBottom: 6,  justifyContent: "flex-start",
//     paddingLeft: 2,
//     paddingTop:  8}}>
//  <input style={{width: "100%",
//     borderWidth: 0,
//     // borderRadius: 4,
//     borderColor: "#fff",
//     backgroundColor: "#fff",
//     marginBottom: 0,}}></input>
// </div>

// </div>

// /
// <div style={{ marginTop: 0,
//     flexDirection: "row",display:'flex',
//     marginBottom: 0,
//     borderBottomWidth: 6,height: 45,borderBottom:'1px solid black',
//     borderBottomColor: "#cfcfcf", }}>

// <div style={{ width: "47%",
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//     justifyContent: "center",borderBottomLeftRadius: 5 ,
//     marginTop: 0,}}>
// <text style={{ marginBottom: 0,}}>Event Type:</text>
// </div>
// <div style={{display:'flex',
//     width: "53%",
//     marginLeft: 0,
//     backgroundColor: "#fff",
//     marginTop: 0,
//     justifyContent: "space-evenly",
//     // paddingTop: 6,
//     paddingBottom: 6,  justifyContent: "flex-start",
//     paddingLeft: 2,
//     paddingTop:  8}}>
//  <input style={{width: "100%",
//     borderWidth: 0,
//     // borderRadius: 4,
//     borderColor: "#fff",
//     backgroundColor: "#fff",
//     marginBottom: 0,}}></input>
// </div>

// </div>

// {/* /* */}


//     </div>
//       </div>
      
//       <div style={{flex:1,backgroundColor:'#eee'}}>
//       <div style={{ marginTop: -110,
//     flexDirection: "row",display:'flex',
//     marginBottom: 0,
//     borderBottomWidth: 6,height: 45,borderBottom:'1px solid black',
//     borderBottomColor: "#cfcfcf", }}>

// <div style={{ width: "47%",
//     backgroundColor: "#fff",
//     paddingLeft: 10,
//     justifyContent: "center",borderBottomLeftRadius: 5 ,
//     marginTop: 0,}}>
// <text style={{ marginBottom: 0,}}>Event Type:</text>
// </div>
// <div style={{display:'flex',
//     width: "53%",
//     marginLeft: 0,
//     backgroundColor: "#fff",
//     marginTop: 0,
//     justifyContent: "space-evenly",
//     // paddingTop: 6,
//     paddingBottom: 6,  justifyContent: "flex-start",
//     paddingLeft: 2,
//     paddingTop:  8}}>
//  <input style={{width: "100%",
//     borderWidth: 0,
//     // borderRadius: 4,
//     borderColor: "#fff",
//     backgroundColor: "#fff",
//     marginBottom: 0,}}></input>
// </div>

// </div>
//       </div>
//       </div>
        
//         </div>
//     )
//   }
// }
