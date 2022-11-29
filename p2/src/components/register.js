import { useNavigate } from 'react-router-dom';
import axios from 'axios'
var check = false;
var alertMessage = "error"
axios.defaults.baseURL = 'http://localhost:5000';

const showPassword = () => {
    var x = document.getElementById("inputPassword");
    var x2 = document.getElementById("confirmPassword");
    if (x.getAttribute('type') === "password") {
        x.setAttribute('type', 'text')
        x2.setAttribute('type', 'text')
    }
    else {
        x.setAttribute('type', 'password')
        x2.setAttribute('type', 'password')


    }

};


const Cred = {

    userName: '',
    email: '',
    password: ''


};

const handleSubmit = async event => {

    event.preventDefault()
    const x = document.getElementById("inputPassword").value;
    const x2 = document.getElementById("confirmPassword").value;

    if (x === x2) {

        const x3 = document.getElementById("inputUser").value
        const x4 = document.getElementById("inputEmail").value

        Cred.password = x;
        Cred.userName = x3;
        Cred.email = x4;
        const res = await axios.post('/register', Cred);


        if (res.data === "email exists") {
            console.log(res.data)
            check = true
            alertMessage = 'You have already registred with this email, login using it instead'

        }
        else if (res.data === "userName exists") {
            console.log(res.data)
            check = false
            alertMessage = 'this username is already take, please choose another one'

        }
        else {
            check = true
            alertMessage = "user added with success, you can now login"
        }


    }
    else {
        console.log('form not submitted');
        alert('Passwords does not match')
    }

};


function Register() {

    const navigate = useNavigate();

    const goToLogin = () => {

        navigate("/login")
    }


    return (

        <div>
            <div className="mx-auto rounded border flex align-items-center container mt-5">
                <form className="col-12" onSubmit={async function (event) { await handleSubmit(event); alert(alertMessage); if (check) navigate("/login") }} >


                    <label className="mt-5 col-3">email</label>
                    <input type="email" className="ml-1 form-control col-10" id='inputEmail' required />



                    <label className="mt-3 col-3">User Name</label>
                    <input className="form-control ml-1 col-10" id='inputUser' required />


                    <label className="col-3 mt-3">password</label>
                    <input className="primary form-control ml-1 col-10" type="password" id="inputPassword" required />

                    <label className="mt-3 col-3">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="mb-3 form-control ml-1 col-10" required />

                    <div className='row-sm-3'>
                        <input className="primary" type="checkbox" onChange={showPassword} />
                        <label className="mg-auto radio-inline ml-3 font-weight-light">show password</label>
                    </div>
                    <div className="col d-flex justify-content-center" >
                        <button type="submit" className="btn btn-warning btn-lg mt-3 mb-3">Submit
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1 bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                        </button>
                        <button type="button" onClick={goToLogin} className="btn btn-warning btn-lg mt-3 mb-3 ml-5">login</button>
                    </div>
                </form>
            </div>
            <div style={{ marginTop: 220 }} >
            </div>
        </div>




    )

}

export default Register;