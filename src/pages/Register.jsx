import React, { useState } from 'react';
import './Login.css';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';

function Register() {
    const [visible, setVisible] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [todo, setTodo] = useState({
        msg :''
    })
    const showHidePass = () => setVisible(!visible);
    const baseUrl = 'http://localhost:8000';

    async function postUserName() {
        try {
            console.log('userName', userName)

            const response = await axios.post(`${baseUrl}/user`, {
                username: userName,
                password: password,

            })
            
            setTodo(response.data)
            console.log('msg : ', response.data)

            alert('add successful!')

        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <>
            <section className='loginContainer'>
                <div className='boxContainer'>
                    <p className='text-size32'>
                        Register
                    </p>
                    <div className='boxInputContainer'>
                        <p className='text-size12'>
                            User Name
                        </p>
                        <input type='text'
                            value={userName}
                            className='boxInput'
                            onChange={e => setUserName(e.target.value)}
                            placeholder="Enter your user name..." />
                    </div>

                    <div className='boxInputContainer'>
                        <p className='text-size12'>
                            Password
                        </p>
                        <div className='boxPasswordInputFlex'>
                            <input type={visible ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='boxInput'
                                placeholder="Enter your password..." />
                            <div onClick={showHidePass} style={{ margin: "red" }} >
                                {visible ? <FaIcons.FaRegEye /> : <FaIcons.FaRegEyeSlash />}
                            </div>
                        </div>
                    </div>
                        <button className='loginBtn' onClick={() => postUserName()}>
                            Register
                        </button>
                    <div className='boxRegisterFlex'>
                        <p className='text-size13'>
                            Already signed up?
                        </p>
                        <Link to='/login' style={{ background: "#fff"}}>
                            <p className='text-size13'>
                                Go to login
                            </p>
                        </Link>
                    </div>
                </div>

            </section>
        </>

    );
}

export default Register;