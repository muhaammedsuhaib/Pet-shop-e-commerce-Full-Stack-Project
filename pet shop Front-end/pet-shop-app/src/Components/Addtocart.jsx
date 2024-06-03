import React, { useContext, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { passingProducts } from './Main';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { toast,ToastContainer } from 'react-toastify';
import Navbar from './Navbar'
import Swal from 'sweetalert2';
import axios from 'axios';

const Addtocart = () => {
  const {userData,adtest}=useContext(passingProducts)
  console.log(userData);
  // console.log('suhaib',userData.cart);
  const nav=useNavigate()
  const [auth,setAuth]=useState(false)

  const showCart= async ()=>{
    const response= await axios.get(`http://localhost:7878/${userData.id}/cart`);

    try {
      toast.success(response.data.message);
    } catch (error) {
      toast.error(response.data.message);
    }
  }





  const increment=(Id)=>{
    const cartData=userData.cart.find((item)=>item.Id ===Id)
    if(cartData.Stock>cartData.Qty){
      cartData.Qty +=1
    setAuth(!auth)
    }else{
      toast.warning('Out of stock')
    }    
  }
  const decrement=(Id)=>{
    const cartData=userData.cart.find((item)=>item.Id ===Id)
    if(cartData.Qty>1){
      cartData.Qty -=1
    }
    setAuth(!auth)   
  }
  const remove=(Id)=>{
    let filterData=userData.cart.filter((item)=>item.Id !== Id )
     userData.cart=filterData
     setAuth(!auth)
  }
 
 const click=()=>{
 if(userData.cart.length===0){
  toast.warning('Add products') 
  setTimeout(() => {
    nav('/all')
  }, 1000); 
 }else if(adtest){
  Swal.fire({
    text: 'Order success!',
    icon: 'success',
    confirmButtonText: 'OK'
  }) 
  
 }else {
  nav('/address')
 }
 }
//  const buyProduct=(Id)=>{
//   if(address){
//     nav('/address')
//   }else{
//     const productBuy=userData.cart.filter((item)=>item.Id ==Id);
//     if(productBuy){
//       const updatcart=userData.cart.filter((item)=>item.Id !== Id)
//       userData.cart=updatcart
//       setBuy([...buy,productBuy])
//       Swal.fire({ text: 'Add account!', icon: 'success',  confirmButtonText: 'OK'    }) 
//       }
//     }
//   }
  return (<>
  {/* <Navbar/> */}
  <br /><br /><br />
  {!userData?(<>
  <div style={{width:'100%', height:'700px',overflow:'auto'}}>
  <h3 style={{color:'gray'}}>Please Login and continue </h3>   
          <div className='container' style={{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center"}} >
        <div style={{width:"400px",height:"400px"  }} >                     
                    <MDBCardImage src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt="..." fluid  onClick={()=>nav('/login')}/> 
                    <MDBBtn outline rounded className='mx-5' color='dark'  onClick={()=>nav('/login')}>        Login     </MDBBtn>                
                  </div>
                  </div>
                  </div>
  </>):(
    <>
    <div style={{width:'100%', height:'700px',overflow:'auto'}}>
    <b style={{color:'WindowFrame'}}>Products</b> 
    {userData.cart.map((item)=>(
       <div class="container">
            <MDBCard>   
            <div class="container" style={{textAlign:'right'}} ><MDBBtn color='wihte' onClick={()=>remove(item.Id)}><MdDeleteForever size={30}/></MDBBtn></div>     
      <MDBCardBody>      
      <div class="container">
    <div class="row">
      <div class="col-sm-1">
      <p><b>{item.Animal}</b></p>
      <MDBCardImage  src={item.image} alt='df' fluid />
      </div>
      <div class="col-sm-6">
      <div style={{color:'Highlight',textDecorationLine:'underline'}} ><b>{item.ProductName}</b></div> 
      <MDBBtn   rounded  className='mx-2' color='white'  onClick={()=>decrement(item.Id)}>  <FaCircleMinus size={20} /> </MDBBtn>
        <b >Quantity:{item.Qty}</b>
      <MDBBtn   rounded  className='mx-2' color='white' onClick={()=>increment(item.Id)}>  <FaCirclePlus size={20}/> </MDBBtn>   <br />
      <b>₹{item.Qty * item.Price}</b> <br />
      <MDBBtn  rounded  className='m-2'  onClick={click}  >BUY Product</MDBBtn>
      </div>
    </div>
  </div> 
  </MDBCardBody>
    </MDBCard>
          </div>
    ))}
   <div class="container" style={{textAlign:'right'}} ><MDBBtn size='lg' className='m-2' onClick={click} >Total amount:₹{userData.cart.reduce((acc,curr)=>acc+=curr.Price*curr.Qty,0)}</MDBBtn></div>
   </div>
    </>
  )}
       <ToastContainer/>                     
  </> )
}

export default Addtocart

// {userData?nav('/address'):toast.warning('Add product')}