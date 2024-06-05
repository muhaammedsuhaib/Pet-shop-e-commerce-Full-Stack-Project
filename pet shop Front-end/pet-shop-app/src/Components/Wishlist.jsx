import React, { useContext, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import axios from "axios";
import { passingProducts } from "./Main";
import {
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBCardImage,
  } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Wishlist() {

    const {userData,adtest,wishlist,setWishlist}=useContext(passingProducts);
     
    const nav=useNavigate();
    const isEmpty= wishlist?.length===0;
  const fetchwishlist = async () => {
    if (!userData?._id) return; // Ensure userData._id is available before making the request
    try {
      const response = await axios.get(`http://localhost:7878/api/users/products/${userData._id}/wishlist`);
      setWishlist(response.data); // Directly set the cart to the fetched data
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
      // Optionally handle the error (e.g., show a notification to the user)
    }
  };
  useEffect(() => {
    fetchwishlist();
  }, []);
  console.log(wishlist);

  return (<>
  <br/>
  <div style={{width:'100%', height:'700px',overflow:'auto'}}>
    {isEmpty?<>
      <h4 style={{color:'gray'}}>Hey {userData?.username}, your cart is empty! Add something now."</h4> 
  <MDBBtn  rounded  className='m-2' color='white' onClick={()=>nav('/all')} >Shop now</MDBBtn>
    </> :<>
       <div> 
       <MDBContainer fluid className="my-5  text-center">
      <h4 className="mt-4 mb-5">
        <strong>Wishlist Products</strong>
      </h4>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      $123
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(2).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      $239
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(3).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      $147
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      $83
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      $106
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol md="6" lg="4" className="mb-4">
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(6).webp"
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                      $58
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </div>    
    </> } 
  </div>

    </>
  );
}

export default Wishlist;