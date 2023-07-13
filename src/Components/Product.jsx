import React, { useState,useEffect } from 'react'
import { BiSortDown, BiSortUp } from "react-icons/bi";
import scrollreveal from "scrollreveal"
// import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import List from './List';
const Product = ({phones}) => {
  const [Search, setSearch] = useState("")
  const [phoneslisted, setphoneslisted] = useState(phones)

  useEffect(() => {
    const filteredData = phones.filter((el) => {
      if (Search === "") {
        return true; // Return true for all items if no search input
      } else {
        return el.Phone_name.toLowerCase().includes(Search);
      }
    });

    setphoneslisted(filteredData);
  }, [Search, phones]); // Update phoneslisted whenever Search or phones changes

  const sortbyParams = (params) =>{
    let sortedData;

    if (params === 'Rating') {
      sortedData = [...phoneslisted].sort((a, b) => b[params] - a[params]); // Sort by Rating (high to low)
    } else if (params === 'Phone_price') {
      sortedData = [...phoneslisted].sort((a, b) => a[params] - b[params]); // Sort by Phone_price (low to high)
    }
    setphoneslisted(sortedData)
  }
  

  // useEffect(() => {
  //   const filtered = phones.filter(p => p.Phone_name.toLowerCase().includes(Search))
  //   setresult(filtered)
  // }, [Search])
  
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        .products
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  return (
    <div className="products-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Showing {phones.length} Results</h2>
          {/* <button>New Comparison</button> */}
        </div>
          <div className="input-container">
              <div className="icon">
                <BiSearch />
              </div>
            <input  type="text" placeholder="I want to buy..." value={Search} onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} />
          </div>
          <div className='button-class'>
            <button className='button-price' onClick={() => sortbyParams('Phone_price')}>Sort by Price <BiSortDown /></button>
            <button className='button-rating' onClick={() => sortbyParams('Rating')}>Sort by Rating <BiSortUp /></button> 
          </div>
        <div className="products">
          {
          phoneslisted.length > 0 ? (
            phoneslisted
            ?.map(({ Phone_name, Phone_price, Phone_img,Screen_size,RAM,Internal_storage,
            Processor,Front_camera,Rear_camera,Rating,fiveg,Battery }, index) => {
             return( 
                // <div className="product-container" key={index}> 
                <>
                <List  
                key={index}
                image={Phone_img} 
                price={Phone_price} 
                name={Phone_name} 
                screen = {Screen_size}
                ram= {RAM}
                storage = {Internal_storage}
                processor = {Processor}
                fcam ={Front_camera}
                rcam = {Rear_camera}
                rating ={Rating}
                fiveg ={fiveg}
                Battery= {Battery}
                 />
                </>
             )
            }
            )) :(
              <>
              <h2>No Result</h2>
              <div>
              
              </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Product