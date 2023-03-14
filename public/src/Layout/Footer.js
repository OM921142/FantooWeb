import React, { Component } from "react";
//import { Nav, Navbar, Container } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from "@mui/material/Icon";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { faAtom,faBookOpen,faCalendarWeek,faCartArrowDown,faHeart, faPerson, faSms, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import  {useHistory}  from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };

  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  routeChange = () => {
    //let path = `newPath`;
    const navigate = useNavigate();
    navigate('/Login_Path');
  }
  render() {
    // let navigate = useNavigate();
    // const routeChange = () => {
    //   let path = `newPath`;
    //   navigate(path);
    // }
    // landingPage = () => {
    //   const openLoginPage = () => {
    //     history.push('/login'); //this will open login page on click of login button
    //   }
    // }
    
    const element = <FontAwesomeIcon icon={faAtom} />
    return (
      <div>
        <Row xs={1} md={6} className="g-4">
          <Col>
            <Card>
              <Navbar className="footer" fixed="bottom">
                <Nav className="me-auto">
                  <Card style={{ marginLeft: '40%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/Home">
                      <span style={{ marginLeft: 10 }} onClick={this.handleClick} >
                        <FontAwesomeIcon className="Icons"
                      //  className={this.state.clicked ? "deselect" : "select"} 
                        icon={faHouse} size='x' />
                      </span>
                    </Nav.Link>
                  </Card>
                  <Card style={{ marginLeft: '85%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/Catalogue">
                      <span style={{ marginLeft: 10 }} onClick={this.handleClick} >
                        <FontAwesomeIcon className="Icons"
                        //className={this.state.clicked ? "select" : "deselect"} 
                        icon={faBookOpen} />
                      </span>
                    </Nav.Link>
                  </Card>
                  <Card style={{ marginLeft: '85%', borderWidth: 0}}>
                    <Nav.Link as={Link} to="/manageOrder">
                      <FontAwesomeIcon className="Icons"
                     // style={{color:'red',height:20,width:20}}
                      icon={faCalendarWeek} />
                    </Nav.Link>
                  </Card>
                 
                  <Card style={{ marginLeft: '85%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/">
                      <FontAwesomeIcon className="Icons" icon={faCartArrowDown} />
                    </Nav.Link>
                  </Card>


                  <Card style={{ marginLeft: '85%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/">

                    <FontAwesomeIcon className="Icons" icon={faUser} />

                    </Nav.Link>
                  </Card>

                  <Card style={{ marginLeft: '90%', borderWidth: 0, backgroundColor: 'rgb(99, 195, 165)' }}>
                    <Nav.Link as={Link} to="/">

                      <FontAwesomeIcon className="Icons" icon={faSms}  />


                    </Nav.Link>
                  </Card>

                </Nav>

              </Navbar>
        </Card>
          </Col>
        </Row>
        {/* <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="me-auto">
              
              <Nav.Link as={Link} to="/Login_Path">

                <span style={{ marginLeft: 10 }}>
                  <FontAwesomeIcon className={this.state.clicked ? "select" : "deselect"} icon={faBookOpen} />
                </span>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <FontAwesomeIcon icon={faCalendarWeek} />
              </Nav.Link>
              <Nav.Link as={Link} to="/">

                <FontAwesomeIcon icon={faHeart} />

              </Nav.Link>
              
              <Nav.Link as={Link} to="/"> 
             <FontAwesomeIcon icon={faCartArrowDown} />
              </Nav.Link>
              <Nav.Link as={Link} to="/">

                <FontAwesomeIcon icon={faUser} />

              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <FontAwesomeIcon icon={faSms} />
              </Nav.Link>


            </Nav>
          </Container>
        </Navbar> */}
      </div>
    );
  }
}

{/* <Row xs={1} md={6} className="g-4">
  {products.product.map((a) =>
    <Col>
      <Card style={{ alignItems: "center", borderWidth: 0, display: 'inline' }}>
        <Card.Img style={{ height: 30, width: 30 }} src={a.image} />
        <Card.Text>
          {a.title}
        </Card.Text>
      </Card>
    </Col>
  )}
</Row> */}