import React, { useState } from 'react';
import './Login.css';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
    const [visible, setVisible] = useState(false);

    const showHidePass = () => setVisible(!visible);

    return (
        <>
            <div className='loginContainer'>
                <div className='boxContainer'>
                    <span className='text-size32'>
                        Login
                    </span>
                    <div className='boxInputContainer'>

                        <span className='text-size12'>
                        User Name

                        </span>
                        <input type='text' className='boxInput' placeholder="Enter your user name..." >
                        </input>
                    </div>

                    <div className='boxInputContainer'>
                        <span className='text-size12'>
                            Password
                        </span>
                        <div className='boxPasswordInputFlex'>
                            <input type={visible ? "text" : "password"} className='boxInput' placeholder="Enter your password...">
                            </input>
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
                        <Link to='/register'>
                            <p className='text-size13'>
                                Sign up
                            </p>
                        </Link>
                    </div>


                </div>

            </div>
        </>

    );
}

export default Login;