import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        age: "",
        email: "",
        occupation: ""
    });

    const { name, age, email, occupation } = user;
    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const handlesubmit = (e) => {
        e.preventDefault();

        let userinfo = {
            name: name,
            age: age,
            email: email,
            occupation: occupation
        }
        //console.log(userinfo);
        navigate("/list")

        window.localStorage.setItem(userinfo.name, JSON.stringify(userinfo))
    }

    return (
        <div className='menu-align'>
            <h2 className='user-name'>User's Details</h2>
            <>
                <form onSubmit={handlesubmit} >
                    <div className='form-field'>
                        <div className='form-info'>
                            <label> Name:</label>
                            <input type='text' id='name' name="name" value={name} minLength={4} maxLength={30} onChange={handlechange} required />
                        </div>
                        <div className='form-info'>
                            <label>Age:</label>
                            <input type='text' id='age' name="age" value={age} maxLength={2} onChange={handlechange} required />
                        </div>
                        <div className='form-info'>
                            <label>Email-id:</label>
                            <input type='email' id='email' name="email" value={email} onChange={handlechange} required />
                        </div>
                        <div className='form-info'>
                            <label>Occupation:</label>
                            <input type='text' id='occupation' name="occupation" minLength={2} maxLength={12} value={occupation} onChange={handlechange} required />
                        </div>
                    </div>
                    <button type='submit' className='btn' >Submit</button>
                </form>
            </>

        </div>
    )
}

export default Users