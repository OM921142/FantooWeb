// import React from 'react';
// import './Registration.css'
// import { useFormik } from 'formik';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ValidateForm = (formValue) => {
//     const errors = {};
//    // const reg_exp_email = /^[a-z0-9._%/+-]+@[a-z0-9.-]+\.[a-z]{2,4}$ /
//     if (!formValue.username) {
//         errors.username = "Please enter username";
//     } else if (formValue.username.length < 5) {
//         errors.username = "Atleast 5 characters required";
//     }
//     if (!formValue.email) {
//         errors.email = "Please enter email";
//         // }else if(!reg_exp_email.test(formValue.email)){
//         //     errors.email="Invalid Email";
//     }
//     if (!formValue.password) {
//         errors.password = "Please enter Password";
//     }
//     console.log("Error:", errors);
//     return errors;
// }
// const Registration = () => {

//     const navigate = useNavigate();
//     const lgn = () => {
//         navigate('/Login_Path')
//     }
//     const formik = useFormik({
//         initialValues: {
//             username: '',
//             email: '',
//             password: ''
//         },
//         validate: ValidateForm,
//         onSubmit: (values) => {
//             console.log("Received values", values);

//             //  axios.post('https://jsonplaceholder.typicode.com/users',values)
//             axios.post('https://project-node-1.herokuapp.com/postUserData', values)
//                 .then(res => {
//                     console.log("Axios Response", res);
//                     navigate('/Login_Path');
//                 })
//                 .catch(err => {
//                     console.log("Axios error", err);
//                 })
//         }
//     })
//     return (
//     <div style={{backgroundColor:'#eee',marginTop:"3%"}}>
//         <form onSubmit={formik.handleSubmit}>


//         <div style={{marginRight:10}}>
//         <div style={{
//           alignItems: 'center', justifyContent: 'center', display: 'flex',
//           flex: 1, marginLeft: '1%', backgroundColor: '#eee',marginTop:-15,
//           padding: 10,
//         }}>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15,marginLeft: "65%",paddingTop:'10%'
//             }}> Username: </text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80,paddingTop:'2%'
//           }}>         
//             <input  style={{
//              marginBottom: 15, marginLeft: "-25%", width: "266%"
//             }} type="text" placeholder="Enter Your username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br></br>
//             {formik.touched.username && formik.errors.username ? <span style={{ color: 'red' }}>{formik.errors.username}</span> : null}
            
//           </span>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15
//             }}></text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80
//           }}>

//           </span>
//         </div>
//       </div>   
// {/* // */}

// <div style={{marginRight:10}}>
//         <div style={{
//           alignItems: 'center', justifyContent: 'center', display: 'flex',
//           flex: 1, marginLeft: '1%', backgroundColor: '#eee',marginTop:-15,
//           padding: 10,
//         }}>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15,marginLeft: "65%",paddingTop:'10%'
//             }}> Email: </text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80,paddingTop:'2%'
//           }}>         
//            <input style={{
//              marginBottom: 15, marginLeft: "-25%", width: "266%"
//             }}
//            type="email" placeholder=" name@example.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input> <br></br>
//             {formik.touched.email && formik.errors.email ? <span style={{ color: 'blue' }}>{formik.errors.email}</span> : null}
            
//           </span>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15
//             }}></text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80
//           }}>

//           </span>
//         </div>
//       </div> 

// {/* // */}
            
// <div style={{marginRight:10}}>
//         <div style={{
//           alignItems: 'center', justifyContent: 'center', display: 'flex',
//           flex: 1, marginLeft: '1%', backgroundColor: '#eee',marginTop:-15,
//           padding: 10,
//         }}>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15,marginLeft: "65%",paddingTop:'10%'
//             }}> Password: </text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80,paddingTop:'2%'
//           }}>         
//             <input style={{
//              marginBottom: 15, marginLeft: "-25%", width: "266%"
//             }}
//              type="text" placeholder=" Enter Your Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br></br>
//             {formik.touched.password && formik.errors.password ? <span style={{ color: 'yellowgreen' }}>{formik.errors.password}</span> : null}
            
//           </span>
//           <span style={{
//             width: "20%",
//             justifyContent: "center",
//           }}>
//             <text style={{
//               display: 'flex',
//               marginLeft: '1%', marginBottom: 15
//             }}></text>
//           </span>
//           <span style={{
//             justifyContent: "center",
//             flex: 1,
//             paddingLeft: 10,
//             marginLeft: 80
//           }}>

//           </span>
//         </div>
//       </div>            
            
//       <button id="BT" type="submit" disabled={!(formik.isValid && formik.dirty)}
//       style={{width:'59%',height:40,borderWidth:0,borderRadius:5,marginLeft:'4%',
//               backgroundColor:'rgb(99, 195, 165)'}}> 
//              <text style={{fontSize:21,color:'white'}}> Submit </text>
//               </button>  
//               <br></br>
            
            
//             {/* Username:
//             <input id="UNM" type="text" placeholder="Enter Your username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br></br>
//             {formik.touched.username && formik.errors.username ? <span style={{ color: 'red' }}>{formik.errors.username}</span> : null}
//             <br></br> */}
//             {/* onBlur is used to get Focus a perticular intput Field.
//        If we use "touched" then onBlur is supplementary used.
//        Otherwise if we toched any one inputfield all the Errors will be shown. */}
//             {/* <button id="BT" type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button> <br></br> */}
            
// <div style={{marginTop:'1%'}}>
//             <text style={{fontSize:18}}>   Already have an account? </text>
//             <button onClick={lgn} type="submit" id='a'> 
//             <text style={{fontSize:19}}> Click to Login</text>
//             </button>
//             </div>
//         </form>
//         <div style={{marginBottom:'2%'}}>
//           <br></br>
//           <br></br><br></br>
//        </div>
//     </div>
//     );
// };
// export default Registration;

  

import { border } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Image from './REg.json'
export default function Registration() {
  const navigate = useNavigate();
   const lgn = () => {
       navigate('/Login_Path')
   }
  return (
    <div>
    <div>
      {/* {Image.Img.map((a)=><img src={a.image}></img>)} */}
  
      <img style={{height:320,width:350}} src="../../Images/logo.png" ></img>
   
    </div >
      <div style={{}}>
        <text style={{fontWeight:'bold',
        fontSize:23,}}> What is Your  Number ?</text><br></br>
        <div style={{marginTop:10}}>
        <text style={{fontSize:16}}> We will send a code to verify your  Number</text>
        </div>
      </div>
    
    <div>
        <p style={{
          display: 'flex', alignItems: 'center',
          justifyContent: "center", marginTop: '3%', marginRight: 28,
          border: '1px solid #ddd', height: 45, width: '25%',
          marginLeft: "38%",borderRadius:7
        }}>
   <img style={{height:30,width:35}} src="../../Images/flag1.jpg" ></img>
      <text style={{marginLeft:12}}> +91 </text>
      
      <input style={{marginLeft:12,width:'65%',height:38,borderWidth:0}}
      placeholder=" Phone Number"></input>
   </p>
 
    </div>
    



  <div style={{marginTop:40,marginRight:"3%"}}>
  <button onClick={lgn}  id="BT" type="submit"
          style={{
            width: '19%', height: 40, borderWidth: 0, borderRadius: 5, marginLeft: "5%",
               backgroundColor:'rgb(99, 195, 165)'}}> 
              <text style={{fontSize:21,color:'white'}}> CONTINUE </text>
               </button> 
  </div>
      </div>
  )
}

        