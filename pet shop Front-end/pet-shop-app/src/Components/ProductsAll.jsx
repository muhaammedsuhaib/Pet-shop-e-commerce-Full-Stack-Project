import React, { useContext } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { MdDeleteForever } from "react-icons/md";
import Admin from './Admin';
import { passingProducts } from './Main';
import { FaEdit } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ProductsAll = () => {
  const {products,setProducts,setItemUpdate}=useContext(passingProducts)
  const nav=useNavigate()
  const remove=(Id)=>{
    let filterData=products.filter((item)=>item.Id !== Id )
    setProducts(filterData)     
  }
  return (
    <>
    <Admin/>
    <div style={{width:'100%', height:'700px',overflow:'auto'}}>
    <b style={{color:'WindowFrame'}}>All Products</b> 
    <div class="container" style={{textAlign:'right'}} ><MDBBtn color='black' onClick={()=>nav('/add')}>< MdFormatListBulletedAdd size={30}/>ADD new product</MDBBtn></div>     
       <div class="container">
   {products.map((item)=>(
    <MDBCard>   
            <div class="container" style={{textAlign:'right'}} > <MdDeleteForever size={25} color='red' onClick={()=>remove(item.Id)}/></div>        
             <MDBCardBody>      
      <div class="container">
    <div class="row">
      <div class="col-sm-1"> 
      <p><b>{item.Animal}</b></p>    
      <MDBCardImage  src={item.Image} fluid />
      </div>
      <div class="col-sm-9">
      <div style={{color:'CaptionText',textDecorationLine:'underline'}} ><b>{item.ProductName} </b></div> 
         ₹<b>{item.Price}</b><br/>
M.R.P.: ₹<span className="text-decoration-line-through">{item.OldPrice}</span><br />      
       <per><strong>Brand:</strong>{item.ProductName}</per> <br/>
       <per><strong>{item.Animal} Food</strong></per> <br/>
          <per><strong>Stock:{item.Stock}</strong></per><br/>      
<div class="container" style={{textAlign:'left'}} > <FaEdit size={20} onClick={()=>{nav('/edit');setItemUpdate(item)}}/></div>
      </div>
    </div>
  </div>  
  </MDBCardBody> 
    </MDBCard>
    
   ))}

            
          </div>
   
   
   </div>
    </>
    )
}

export default ProductsAll