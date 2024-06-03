import React, { useContext, useState } from 'react'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem} from 'mdb-react-ui-kit';
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { passingProducts } from './Main';


const Navbar = () => {
    const [openBasic, setOpenBasic] = useState(false);
    const nav=useNavigate()
    const {userData,setSearch,products}=useContext(passingProducts)

    const searchinput=(e)=>{
      e.preventDefault()
      let inputword=products.filter((x)=>x.ProductName.toLowerCase().includes(e.target.value.toLowerCase()));
      if(e.target.value.length===0){
        setSearch(null)
      }else if(inputword){
        console.log(inputword);
        setSearch(inputword)
        nav('/all')
      }else{
        setSearch(null)    
      }}
  
  return (
    <>
    <div>
        <MDBNavbar expand='lg' light bgColor='light' fixed="top" >
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'onClick={()=>nav('/')}>Pet shop</MDBNavbarBrand>
     
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' onClick={()=>nav('/')}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' onClick={()=>nav('/offer')} >
                Offers
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' >
                
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                 Shopnow
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={()=>nav('/cat')}>Cat</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>nav('/dog')}>Dog</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>nav('/all')}>All</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>           
          </MDBNavbarNav>   
          <form className='d-flex input-group w-auto'>            
          <input type='search' className='form-control' placeholder='Search' aria-label='Search' onChange={searchinput} />
          
          </form>          
            <MDBNavbarLink >
                {!userData?< MdOutlinePersonAddAlt1 size={28} style={{margin:'15'}} onClick={()=>nav('/login')}/>:<FaCircleUser size={28} style={{margin:'15'}}  onClick={()=>nav('/login')}/>}      
                </MDBNavbarLink>
              <MDBNavbarLink>              
                    <FaCartShopping size={28} style={{margin:'15'}} onClick={()=>nav('/addtocart')}/>
                    </MDBNavbarLink>                                  
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    
    </div>
   
    
    </>
  )
}

export default Navbar



