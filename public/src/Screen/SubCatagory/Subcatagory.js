import React, { Component } from 'react'
import Subcat from './SubCat.json'
import "./Subcatagory.css"
import { Row, Card, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import SubcatHeader from './SubcatHeader'
import Header from '../../Layout/Header';
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
      <div style={{overflow:'hidden',justifyContent:"center",alignSelf:"center",alignItems:"center",marginTop:'1%'}}>
        <div>
          <Nav.Link style={{ width: '100%' }} as={Link} to="/subcatagory">
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
          </Nav.Link>
        </div>
        <div style={{justifyContent:"center",alignItems:"center"}}>
        <Carousel style={{paddingLeft:50, paddingRight:50,paddingTop:15}}>
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
        <div>
        <Row xs={1}  md={5} className="g-4"
              style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 15, textDecoration: 'none', }} >
        {Subcat.Games.map((a)=>
          <Link to={`/subcatagory/${a.title}`} style={{textDecoration:'none'}}>
                <Col>
                  <Card>
                    <Card.Img style={{ paddingLeft:0,paddingRight:0,width:210,height:150,
                    alignSelf:"center",paddingTop:20}} src={ a.image} />
                <Card.Text style={{
                  paddingTop: 7, textDecoration:'none',
                  paddingBottom: 10, color: 'black'
                }}>
                  <text style={{ fontWeight:'bold'}}> {a.title}</text><br></br>
                  $ {a.price}
                  </Card.Text>
             

              
                  </Card>
            </Col>
          </Link>
              )}
            </Row>
        </div>
        <div style={{marginBottom:'2%'}}>
          <br></br>
          <br></br><br></br>
       </div>
        
        </div>
        </>
    )
  }
}
