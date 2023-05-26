import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextPage } from '../Contexts/ContextPageProvider';

export default function Login() {

    const navigate = useNavigate();

    const {email, password, confirm, users, setEmail, setPassword, setConfirm, setUsers, addUsers} = useContext(ContextPage);

    const btnLogin = () => {
        console.log(1);
        let user = users.find((user) => user.userEmail === email && user.userPassword === password);
        console.log(user);
        if(user) {
            navigate('/main');
        }
        else {
            alert('Error');
        }
    }

  return (
    <div>
        <h1>Login </h1><br />
        <div className="div">
        <p><label>Email: </label><input type="email" onChange={(e) => setEmail(e.target.value)}/> </p>
        <p><label>Password: </label><input type="password" onChange={(e) => setPassword(e.target.value)}/></p>
        </div>
        <button onClick={btnLogin}>Login</button> <br />
        <button onClick={() => navigate('/register')}>press here to register</button>
    </div>
  )
}
