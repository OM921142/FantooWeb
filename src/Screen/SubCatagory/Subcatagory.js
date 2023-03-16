import React, { Component } from 'react'
import Subcat from './SubCat.json'
import "./Subcatagory.css"
import { Row, Card, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import SubcatHeader from './SubcatHeader'
import Header from '../../Layout/Header';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


export default class Subcatagory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          waterGame:false
        };
      }
      handleClick = () => {
        this.setState({  waterGame: true });

      };
  render() {
    return (
    <>
   <SubcatHeader />
      <div style={{overflow:'hidden',justifyContent:"center",
      alignSelf:"center",alignItems:"center",marginTop:'1%'}}>
        
        <div style={{paddingLeft:30,paddingRight:30}}>
        <OwlCarousel items={2}  
          margin={8} >     
          {Subcat.Games.map((a) => 
       <p className='OWL'>
         <button  onClick={this.handleClick} 
        style={{ 
          height:37,width:140,
        marginRight:"",marginLeft:5,marginTop:7,
        borderWidth:1,
        borderColor:'rgb(99, 195, 165)' ,
        backgroundColor:'white',
        color:"rgb(99, 195, 165)",
        borderBottomColor:"rgb(99, 195, 165)",
        borderBottomWidth:1,borderRadius:6,
        // backgroundColor:'rgb(99, 195, 165)',borderColor:'rgb(99, 195, 165)' , 
        // borderBottomColor:"rgb(99, 195, 165)",
        //   borderBottomWidth:1,borderRadius:4,color:'white'
         }}
        >
         <text className='heading'>{a.title} </text>
        
        </button>
       </p>
          )}
       </OwlCarousel>

          {/* <Nav.Link style={{ width: '100%' }} as={Link} to="/subcatagory">
          {Subcat.Games.map((a) => 
        <button  onClick={this.handleClick} 
     // className="selected"
        //className={this.state.clicked ? "selected" : "deselected"}
        style={{ 
        marginRight:5,marginLeft:5,marginTop:7,
        borderWidth:1,
        borderColor:'rgb(99, 195, 165)' ,
        backgroundColor:'white',
        color:"rgb(99, 195, 165)",
        borderBottomColor:"rgb(99, 195, 165)",
        borderBottomWidth:1,borderRadius:4

        // backgroundColor:'rgb(99, 195, 165)',borderColor:'rgb(99, 195, 165)' , 
        // borderBottomColor:"rgb(99, 195, 165)",
        //   borderBottomWidth:1,borderRadius:4,color:'white'

         }}
        >
            <text className='heading'>{a.title}</text>
        </button>
       
          )}
          </Nav.Link> */}
        </div>
        <div style={{justifyContent:"center",alignItems:"center",marginTop:-25}}>
        <Carousel style={{paddingLeft:20, paddingRight:20,}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/banner1.png"
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/banner1.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/banner1.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div style={{ marginTop: '3%',paddingLeft:20, paddingRight:20,}}>
          
        <Row xs={2}  md={3} className="g-4">
        {Subcat.Games.map((a)=>
          <Link to={`/subcatagory/${a.title}`} style={{textDecoration:'none'}}>
                <Col>
                  <Card className='Game'>
                    <Card.Img  style={{marginTop:10,marginBottom:7,paddingRight:5,paddingLeft:5,borderRadius:0}}                   
                    src={ a.image} />
                <Card.Text style={{
                  //paddingTop: 7,
                   textDecoration:'none',color: 'black'
                  //paddingBottom: 10, 
                }}>
                  <text style={{fontWeight:'bold'}}> {a.title}</text><br></br>
                  $ {a.price}
                  </Card.Text>
                  </Card>
            </Col>
          </Link>
              )}
            </Row>
        </div>
        <div style={{marginBottom:'2%'}}>
                 
       </div>
        
        </div>
        </>
    )
  }
}
