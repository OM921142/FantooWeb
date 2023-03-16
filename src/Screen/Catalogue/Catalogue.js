import React, { Component } from 'react'
import card from '../CardImage.json'
import product from '../Products.json'
import './Catalogue.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronright } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import HeaderforCatalogue from './HeaderforCatalogue'
import { GetCategorys } from '../../services/CategoryService'
export default class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      isOpen: false
    };
  }

  
  componentDidMount() {
    this.loadCategoryList();
  }

  routeChange = () => {
    //let path = `newPath`;
    const navigate = useNavigate();
    navigate('/subcatagory');
  }

  loadCategoryList = () => {
		GetCategorys()
			.then((response) => {
				console.log(response);
				this.setState({
					categoryList: response.data,
					isLoading: false,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
  render() {

    return (

      <div>
        <HeaderforCatalogue />
        {this.state.categoryList.map((a) =>{
         return( <span
            style={
              {
                display: 'flex', flex: 1,
                padding: 10,
                marginBottom: '0.5%', marginLeft: '1%', marginRight: '1%',
                borderBottom: '1px solid #ddd'
              }
            }>
            <Nav.Link style={{ width: '100%' }} as={Link} to="/subcatagory">
              <button onClick={() => this.routeChange} style={{
                alignItems: 'center', justifyContent: 'center', display: 'flex',
                width: '100%', borderWidth: 0, backgroundColor: 'white'
              }}>
                <span style={{
                  width: "20%",
                  justifyContent: "center",
                }}>
                  <img style={{
                    display: 'flex',
                    marginBottom: 10,
                    height: 40, width: 50, marginRight: ' 10px auto '

                  }} 
                  // src={a.image} 
                  src={`https://funworks.in/uploads/category/${a.image}`}
                  />

                </span>
                <span style={{
                  justifyContent: "center",
                  flex: 1,
                  paddingLeft: 10,
                  marginLeft: 60
                }}>
                  <text style={{
                    display: "flex", marginLeft: "-26%", marginBottom: 5, fontSize: 17
                  }}>
                    {a.name}

                  </text>
                </span>
                <span style={{

                  justifyContent: "flex-end",
                  alignItems: "center", color: '#ddd'
                }}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </Nav.Link>
          </span>)
  })}
      </div>
    )
  }
}
