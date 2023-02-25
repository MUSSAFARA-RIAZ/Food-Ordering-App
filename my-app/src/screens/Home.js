import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Card from '../Components/Card';
import Carousel from 'react-bootstrap/Carousel';

import Form from 'react-bootstrap/Form';
export default function Home() {
  const[Search,setSearch]=useState("");
  const [foodCat, setfoodCat] = useState([])
  const [foodData, setFoodData] = useState([])
  const loaddata = async () => {
    let response = await fetch('http://localhost:5000/api/fooddata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    response = await response.json();

  setFoodData(response[0]);
  setfoodCat(response[1]);

  
  }
  useEffect(() => {
    loaddata()
  }, [])

  return (
   
    <div>
           <Header />
           <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{height:400}}
          src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg"

          alt="First slide"
        />
           <Carousel.Caption>
         <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={Search}
              onChange={(e)=>{
                setSearch(e.target.value)}}
            />
         
          </Form>
          </Carousel.Caption>
      
      </Carousel.Item>
     
      <Carousel.Item>
        <img
          style={{height:400}}
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-…"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:400}}
          className="d-block w-100 h-70"
          src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-…"
          alt="Third slide"
        />

     
       
      </Carousel.Item>
    </Carousel>
      <div className="container">
        {
          foodCat!==[]?foodCat.map((data)=>{
            return(
              <div className='row mb-3'>
              <div >{data.CategoryName}</div>
              <hr/>
              {
                foodData!==[]?foodData.filter((item)=>(item.CategoryName===data.CategoryName) && (item.name.toLowerCase().includes(Search))).map(filteritem=>{
                  return(
                    <div key={filteritem.id} className="col-12 col-md-6 col-lg-4">
                      <Card
                     // foodData={filteritem}
                      foodName={filteritem.name}
                      imgSrc={filteritem.img}
                      option={filteritem.options}
                      desc={filteritem.description}
                      
                      ></Card>

                    </div>
                  )
                }):"No data found"

              }
              </div>
// return bracket
            )
            // main container bracket
}):"No item found"

          }
      </div>
        

      <Footer />
   
      </div>
   
  )
}
  // [] shows that on first reload all func call with in
  // useffect
 


