import React, { useState,useEffect } from 'react'
import scrollreveal from "scrollreveal"
// import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import List from './List';
const Product = ({phones}) => {
  const [Search, setSearch] = useState("")

  const filteredData = phones.filter((el) => { //filterdata is function used for search
    //if no input the return the original
    if (Search === '') {
        return el
    }
    //return the item which contains the user input
    else  {
        return(el.Phone_name.toLowerCase().includes(Search))
    }
})

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
        <div className="products">
          {
          filteredData.length > 0 ? (
            filteredData?.map(({ Phone_name, Phone_price, Phone_img,Screen_size,RAM,Internal_storage,
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
                
                {/* <Demo image={Phone_img} price={Phone_price} name={Phone_name} index1={index}/>  */}
                </>


              // <div className="product-container" key={index}>  
              // <div className="image">
              //   <img src={Phone_img} alt="Product" />
              //   </div>
              //   <div className='phone-details'> 
              //     <h4>{Phone_name}</h4>
              //     <h4>₹ {Phone_price}</h4>
              //   </div>
              // </div>
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