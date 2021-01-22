import React ,{ useState } from 'react'
import useInput from "./useInput";

export default function UserForm(){
    const [firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]=useInput('')
    const [email,bindEmail,resetEmail]=useInput('')
    const [password,bindPassword,resetPassword]=useInput('')


    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
        resetEmail()
        resetPassword()
    }

    return(
        <div className="App">
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input {...bindFirstName} type='text' />
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...bindLastName} type='text' />
                </div>
                <div>
                    <label>Email</label>
                    <input {...bindEmail} type='text' />
                </div>
                <div>
                    <label>Password</label>
                    <input {...bindPassword} type='text' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )

}
