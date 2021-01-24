import React,{useState} from 'react';

function LoginForms(){

const [username,setUserName] = useState('')
const [password,setPassword] = useState('')

const sss = (e) => {
    alert(username+' '+password);
    e.preventDefault();
}
    return(
        <div className="App">
        <form>
            <div>
                <label>Username</label>
                <input value={username} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={sss}>Submit</button>
            </div>
        </form>
        </div>
    )
}

export default LoginForms;
