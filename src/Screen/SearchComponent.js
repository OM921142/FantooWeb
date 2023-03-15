import React, { useState } from "react";
import './Search.css'
import CartHeader from '../Screen/Cart/CartHeader'
import Images from '../../src/Images/image3.png';

let items = [{
  id: "1",
  name: "Jungel Tower",
  images: Images,
  price:"25000"
},
{
  id: "2",
  name: "Zongo Bongo",
  images: Images,
},
{
  id: "3",
  name: "Big Rock",
  images: Images,
},
{
  id: "4",
  name: "Surfing",
  images: Images,
},
{
  id: "5",
  name: "Gaint jenga",
  images: Images,
},
{
  id: "6",
  name: "Girafee",
  images: Images,
}
]

const SearchComponent = () => {


  const [searchInput, setSearchInput] = useState("");

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue)
  //   return items.filter((item) => {
  //     item.name.join('').toLowerCase().includes(searchInput.toLowerCase())
  //   })
  // }

  return (
    <div>
      <CartHeader title="Search" />
      <div style={{ marginTop: 10, width: "100%", paddingLeft: 22 }}>
        <div class="form-group has-search " style={{ marginTop: 15, width: "98%" }}>
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} />
        </div>
      </div>
      <div>
      {items.filter((user) =>
      user.name.toLowerCase().includes(searchInput)
      ).map((item)=>{
       return <div style={{display:'flex', flexDirection:'column', borderBottomWidth: '1px', borderBottomColor: '#ddd',borderBottomStyle: 'solid'}}>
         <div>
           <div className=" p-4 bd-highlight" style={{
             backgroundColor: "white",
             marginTop: 10,
             display: 'flex',
             flexDirection: 'row',
             // justifyContent:'space-between',
             alignItems: 'center'
           }}>
             <div className="">
               <img style={{}} src={Images}></img>
             </div>
             <div style={{marginLeft:30,}}>
               <div>
                 <text>{item.name}</text>
               </div>
             </div>
 

           </div>
         </div>
       
     </div>
      }) } 
      </div>
    </div>
  );
};

export default SearchComponent;
