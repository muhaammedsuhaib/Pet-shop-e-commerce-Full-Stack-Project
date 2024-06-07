import React, { useContext, useRef, useState } from 'react'
import {
    MDBInput,
    MDBBtn,
    MDBRadio,
    MDBFile,
    MDBTextArea
  } from 'mdb-react-ui-kit';
import Admin from './Admin';
import { passingProducts } from './Main';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Addproducts = () => {

   const [addproduct,setAddproduct]=useState('');
  //  console.log(addproduct);

    const {products,setProducts}=useContext(passingProducts)
    const inputRef=useRef(null)


    const handleSubmit=(e)=>{
        e.preventDefault()
        const response = axios.post(`http://localhost:7878/api/admin/createProducts`,{
          title:addproduct.title,
          
        })
        try {
          console.log(response);
          alert(response.data.message);
          
        } catch (error) {
          console.log(error);
          alert(response.data.message,error);
        }
    }
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     let pName = inputRef.current.pName.value
    //     let pStock = inputRef.current.pStock.value
    //     let pPrice=inputRef.current.pPrice.value
    //     let pdPrice=inputRef.current.pdPrice.value
    //     let purl =inputRef.current.purl.value
    //     let panimal=inputRef.current.inlineRadio.value
    //     const newProduct={
    //         Id:products.length+1,
    //         ProductName:pName.toUpperCase(),
    //         OldPrice: Number(pPrice),
    //         Price: Number(pdPrice),
    //         Image:purl,
    //         Animal:panimal,
    //         Stock: Number(pStock),
    //         Qty:1,
    //       }
    //         setProducts([...products,newProduct])
    //         Swal.fire({
    //           text: 'Add product!',
    //           icon: 'success',
    //           confirmButtonText: 'OK'
    //         })
    //         setTimeout(()=>{
    //      nav('/productsall')
    //         }, 1000);
    // }


    const nav=useNavigate()
        
    
   
  return (<>
  <Admin/>
  <div className='top'>
    <div className='container' style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"500px",height:"500px" ,padding:"10px",backgroundColor: 'rgba(255, 255, 255, 0.5)',backdropFilter: 'blur(2px)'}}>
           {/* <form onSubmit={handleSubmit} ref={inputRef}>
      <MDBInput wrapperClass='mb-4' required type='text'  label='Product name' onClick={(e)=>setAddproduct([...addproduct,{title:e.target.value}])} />
      <MDBInput wrapperClass='mb-4' required type='number' label='Product Stock'  name='pStock'/>
      <MDBRadio name='inlineRadio'  required id='inlineRadio1' value='Cat' label='Cat' inline />
      <MDBRadio name='inlineRadio'  required id='inlineRadio2' value='Dog' label='Dog' inline />
      <MDBInput wrapperClass='mb-4' required type='number' label='Price' name='pPrice' />
      <MDBInput wrapperClass='mb-4' required type='number' label='Discont price' name='pdPrice' />
      <MDBInput wrapperClass='mb-3' required type='url' label='Image URL'  name='purl' />

      <MDBBtn className='mb-4' type='submit' >      Add product    </MDBBtn>
    </form> */}
           <form onSubmit={handleSubmit}>
      <MDBInput wrapperClass='mb-4' required type='text'  label='Product name' onClick={(e)=>setAddproduct([...addproduct,{title:e.target.value}])} />
      <MDBRadio name='inlineRadio'  required id='inlineRadio1' value='Cat' label='Cat' inline  onClick={(e)=>setAddproduct([...addproduct,{category:e.target.value}])}/>
      <MDBRadio name='inlineRadio'  required id='inlineRadio2' value='Dog' label='Dog' inline onClick={(e)=>setAddproduct([...addproduct,{category:e.target.value}])}/>
      <MDBInput wrapperClass='mb-4' required type='number' label='Price' onClick={(e)=>setAddproduct([...addproduct,{price:e.target.value}])}/>
      <MDBTextArea wrapperClass='mb-4' required type='text' label='Description' onClick={(e)=>setAddproduct([...addproduct,{description:e.target.value}])} />
      <MDBFile wrapperClass='mb-4' type="file" name="" id="" onClick={(e)=>setAddproduct([...addproduct,{image:e.target.file}])}  /> <br />

      <MDBBtn className='mb-4' type='submit' >      Add product    </MDBBtn>
    </form>
    <b>suhaib@gmail.com</b>
    </div>
    </div>   
    </div>
    </>
  )
}

export default Addproducts