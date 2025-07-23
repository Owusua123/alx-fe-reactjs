import {userContext} from 'react'
import UserContext from './UserContext.js'
import { useContext } from 'react';


function UserDetails({ userData }) {
 const userData=useContext (UserContext)
    return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;