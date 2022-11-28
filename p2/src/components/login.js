import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

var check = false;
var notExist = false;

export const userName = {username:'guest'} 


export const getUserName = async () => {


    try{
        const res = await axios.get('/userName')
        return res.data

        }
    
    catch (e){
        return "guest"

    }
        
    }
    



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
                            <button type="submit" className="btn btn-warning btn-lg mt-3 mb-3">submit</button>
                            <button type="button" onClick={goToRegister}  className="btn btn-warning btn-lg mt-3 mb-3 ml-5">register</button>
                        </div>

                    </form>
                </div>
                <div style={{ marginTop: 390 }} >
                </div>

            </div>


        );

    }

    export default Login;
