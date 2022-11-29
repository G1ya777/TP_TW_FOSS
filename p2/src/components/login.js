import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

var check = false;
var notExist = false;


const Cred = {

    login: "null",
    password: "null"

};


const showPassword = () => {

    const x = document.getElementById("inputPassword");
    if (x.getAttribute('type') === "password")
        x.setAttribute('type', 'text')
    else
        x.setAttribute('type', 'password')

};


const handleSubmit = async (event) => {

    Cred.password = document.getElementById("inputPassword").value;
    Cred.login = document.getElementById("inputEmail").value;

    event.preventDefault()
    try {
        const res = await axios.post('/login', Cred)

        if (res.data === 'bad password') {
            alert("bad password, not authorized")
            check = false;

        }
        else if (res.data === "user does not exist") {
            alert("user does no exist")
            notExist = true;

        }
        else {

            alert('Login Successful')
            check = true;
        }

    }
    catch (err) {
        console.log(err)
        event.preventDefault();
        console.log('form not submitted');
        alert('catch, form not submitted')
    }



}



function Login() {

    const navigate = useNavigate();

    const submitFunction = async (event) => {
        await handleSubmit(event);
        if (notExist)
            navigate('/register');
        else if (check) {
            navigate('/home')

        }
    }

    const goToRegister = () => {
        navigate('/register');
    }

    return (
        <div>
            <div className="mx-auto rounded border flex align-items-center container mt-5" style={{ marginTop: '250px' }}>
                <form className="col-12" onSubmit={async function (event) { submitFunction(event) }}>

                    <label className="mt-5 col-3">email/username</label>
                    <input id="inputEmail" className="ml-1 form-control col-10" required />

                    <label className="mt-3 col-3">password</label>
                    <input className="ml-1 form-control col-10" type="password" id="inputPassword" required />

                    <div className='row-sm-3'>
                        <input className="primary ml-2" type="checkbox" onChange={showPassword} />
                        <label className="mg-auto radio-inline ml-3 mt-4 font-weight-light">show password</label>
                    </div>

                    <div className="col d-flex justify-content-center" >
                        <button type="submit" className="btn btn-warning btn-lg mt-3 mb-3">Submit 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1 bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                        </button>
                        <button type="button" onClick={goToRegister} className="btn btn-warning btn-lg mt-3 mb-3 ml-5">Register</button>
                    </div>

                </form>
            </div>
            <div style={{ marginTop: 390 }} >
            </div>

        </div>


    );

}

export default Login;
