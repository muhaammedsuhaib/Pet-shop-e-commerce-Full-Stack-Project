import React, { useContext } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Admin from './Admin';
import { passingProducts } from './Main';
import { FaUserCircle } from "react-icons/fa";

const AllUsers  = () => {
  const {loginData}=useContext(passingProducts)
  return (
  <div>
    <Admin/>
    <div className='container' style={{border:'2px solid black',width:'90%',height:700 ,overflow:'auto'}}>
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>User</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {loginData.map((item)=>(
           <tr>
          <th scope='row'><FaUserCircle size={30}/></th>
          <td>{item.username}</td>
          <td>{item.email}</td>
        </tr>  
        ))}
            
      </MDBTableBody>
    </MDBTable>
    </div>
  </div>
    
  );
};
export default AllUsers ;