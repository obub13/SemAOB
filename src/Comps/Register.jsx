import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextPage } from '../Contexts/ContextPageProvider';

export default function Register() {
    const navigate = useNavigate();

    const {email, password, confirm, users, setEmail, setPassword, setConfirm, setUsers, addUsers} = useContext(ContextPage);
  
    function validateEmail(email) {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }
      
    const btnAddUser = () => {
        console.log(validateEmail(email));
        console.log(email, password, confirm);
        if (password === confirm && validateEmail(email)) {
            addUsers(email, password);
            navigate('/');
        }
        else {
            alert('Error');
        }
    }
    

    return (
    <div>
        <h1>Register</h1> <br />
        <div className="div">
        <p><label>Email: </label><input type="email" onChange={(e) => setEmail(e.target.value)}/> </p>
        <p><label>Password: </label><input type="password" onChange={(e) => setPassword(e.target.value)}/></p>
        <p><label>Confirm Password: </label><input type="password" onChange={(e) => setConfirm(e.target.value)}/></p>
        </div>
        <button onClick={btnAddUser}>Register</button>
    </div>
  )
}
