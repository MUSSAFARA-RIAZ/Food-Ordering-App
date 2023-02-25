import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import {usedispatchcart,useCart} from './ContextReducer';


function BasicExample(props) {
  let options=props.option;
  let priceOptions=Object.keys(options);



  return (
    <>
    <Card style={{margin:10, width: '18rem' , "maxHeight":"450px"}}>
      <Card.Img variant="top" style={{width:288 , height:"150px",objectFit:"fill"}} src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.foodName}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <div className='container w-100 h-100'>
         <select className='m-2  h-100 bg-success rounded '>
          {Array.from(Array(6),(e,i)=>{
           return(
            <option key={i+1} value={i+1}>{i+1}</option>
           )

          })}

         </select>
         <select className='m-10 h-100 bg-success rounded '>
         {
          priceOptions.map((data)=>{
            return <option key={data} value={data}>
              {data}
            </option>

          })
         }
     
          
         </select>
         <div className='fs-5 m-1 d-inline h-100'>Total Price</div>
        </div>
        <Button variant="success" className='text-light'>Add to Cart</Button>
      </Card.Body>
    </Card>

   </>
   
       

  );
}

export default BasicExample;