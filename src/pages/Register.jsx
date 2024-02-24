import React, { useState } from 'react';
import './Login.css';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
    const [visible, setVisible] = useState(false);

    const showHidePass = () => setVisible(!visible);

    async function postUserName() {
        try {
            await axios.post(`${baseUrl}/todos`, {
                id: todos.length + 1,
                name: firstName,
                status: 'status ' + todos.length + 1,
                check: isDisable
            })

            await fetchTodo()
            alert('add successful!')

        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <>
            <div className='loginContainer'>
                <div className='boxContainer'>
                    <span className='text-size32'>
                        Register
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
                    <Link to='/login' >
                        <button className='loginBtn' onClick={() => postUserName()}>
                            Register
                        </button>
                    </Link>
                    <div className='boxRegisterFlex'>
                        <p className='text-size13'>
                            Already signed up?

                        </p>
                        <Link to='/login'>
                            <p className='text-size13'>
                                Go to login
                            </p>
                        </Link>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Register;