import React, { useState } from 'react';
import './Login.css';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
    const [visible, setVisible] = useState(false);

    const showHidePass = () => setVisible(!visible);

    return (
        <>
            <section className='loginContainer'>
                <div className='boxContainer'>
                    <p className='text-size32'>
                        Login
                    </p>
                    <div className='boxInputContainer'>

                        <p className='text-size12'>
                        User Name

                        </p>
                        <input type='text' className='boxInput' placeholder="Enter your user name..." />
                    </div>

                    <div className='boxInputContainer'>
                        <p className='text-size12'>
                            Password
                        </p>
                        <div className='boxPasswordInputFlex'>
                            <input type={visible ? "text" : "password"} className='boxInput' placeholder="Enter your password..."/>
                            <div onClick={showHidePass} style={{ margin: "red" }} >
                                {visible ? <FaIcons.FaRegEye /> : <FaIcons.FaRegEyeSlash />}
                            </div>
                        </div>
                    </div>
                    <Link to='/' >
                        <button type='sumbit'className='loginBtn'>
                            Log in
                        </button>
                    </Link>
                    <div className='boxRegisterFlex'>
                        <p className='text-size13'>
                            Don’t have an account?

                        </p>
                        <Link to='/register' style={{ background: "#fff"}}>
                            <p className='text-size13'>
                                Sign up
                            </p>
                        </Link>
                    </div>


                </div>

            </section>
        </>

    );
}

export default Login;