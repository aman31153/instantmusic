import React, { useRef, useState } from 'react';
import { useMutation, gql } from "@apollo/client";

const ADD_USER = gql`
mutation createUser(
  $username:String!
  $password:String!
){
    createUser(
        userInput:{
    username:$username
    password:$password
        }){
            userDetails{
                _id,
                username
              },
                token{
                  token
                }
        }
}
`;

function Navbar(props) {
    const [popup, setpopup] = useState(false);
    const userEl = useRef(null);
    const passEl = useRef(null);
    const user = localStorage.getItem('userDetails')? JSON.parse(localStorage.getItem('userDetails')):null;
    const [createUser, { error }] = useMutation(ADD_USER);
    const handleUser = (event) => {
        event.preventDefault();
        setpopup(!popup);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createUser({ variables: { username: userEl.current.value, password: passEl.current.value } }).then((data) => {
            props.doSignup(data.data.createUser.userDetails.username);
            localStorage.setItem('userDetails',JSON.stringify(data.data.createUser.userDetails));
            localStorage.setItem('token',JSON.stringify(data.data.createUser.token.token));
            userEl.current.value = '';
            passEl.current.value = '';
            setpopup(false);
        }).catch((errors)=>{
             console.log(errors,error);
        })
    }

    return (
        <>
            <nav>
                <a className="navLinks" href="#!"><img src="/logo.png" alt="logo" /></a>
                <div className="left-nav">
                    <a className="navLinks" href="#!" onClick={handleUser}><i className="fa fa-user" aria-hidden="true"></i>{user?user?.username:'User'}</a>
                </div>
            </nav>

            <div id="myModal" className="modal" style={{ display: (popup ? 'block' : 'none') }}>
                <div className="modal-content">
                    <span className="close" onClick={handleUser}>&times;</span>
                    <div>
                        <div className="userLogo"><img src="/logo.png" alt="logo" />
                            <h2>Login</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="fname">User Name</label>
                            <input type="text" id="uname" name="username" ref={userEl} placeholder="Your username.." />

                            <label htmlFor="lname">Password</label>
                            <input type="password" id="pass" name="password" ref={passEl} placeholder="Your Password.." />
                            <p>Already have a account?<a href="#!">Click Here</a></p>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;