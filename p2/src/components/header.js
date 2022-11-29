import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getUserName } from '../control/getters';
import axios from "axios";
import { getFlowerArray } from "../control/getters";

export var logButton;


const handleSubmit = (event, name) => {
    event.preventDefault()
    console.log({ name })
}

const getUser = async () => {

    return await getUserName()

}



function Header() {

    const navigate = useNavigate();
    const [user, setUser] = useState();

    getUser().then(value => setUser(value))

    useEffect(() => {
        getUser().then(value => setUser(value))
      }, []);

    const [state, setState] = useState(logButton)

    const doSetState = (() => { setState(logButton) })

    useEffect(() => {
        if (user !== 'guest') {
            logButton = "logout"
            doSetState()

        }

        else {
            logButton = "login"
            doSetState()

        }
    }, [user])


    const doLogin = () => {
        doSetState();
        navigate('/login')
    }

    const doLogout = async () => {
        doSetState("login");
        await axios.delete("/logout")
        navigate('/home')
        window.location.reload(false);
    }

    const handleClick = () => {
        if (state === "login")
            doLogin();
        else {
            doLogout();
        }
    }

    const goToContact = () => {

        navigate('/contact')

    }

    const goToCart = async () => {

        const res = await getFlowerArray();

        navigate('/cart', { state: { flowerArray: res } })

    }

    const goToHome = () => {

        navigate('/home')

    }

    const goToProducts = async () => {

        if (user !== 'guest') {

            try {
                const res = await axios.get('/flower', {
                    params: {
                        page: 1
                    }
                })
                navigate('/products', { state: { flowerArray: res.data } })

            }
            catch (e) {
                console.log(e)
            }


        }
        else navigate('/products')

    }

    const goToSettings = () => {

        navigate('/settings')

    }




    return (
        <div className=" bg-primary rounded">


            <nav className="col navbar navbar-dark rounded bg-primary">

                <div className="mt-3 col-xl-3 col-lg-5 col-md-10 col-sm-12">

                    <button onClick={goToHome} className="navbar-brand btn mr-3 mb-2">Flowers</button>

                    <button type="button" onClick={() => goToHome()} className="btn nav-item active mg-auto text-white mb-3">Home</button>

                    <button type="button" onClick={() => goToProducts()} className="btn nav-item mg-auto text-white mb-3">Products</button>

                    <button type="button" onClick={() => goToContact()} className="btn nav-item mg-auto text-white mb-3">About</button>

                </div>
                <div className="col-xl-5 col-lg-4 col-md-8 col-sm-6 ">
                    <form className="form-inline" onSubmit={(event) => handleSubmit(event)}>
                        <input className="form-control mr-2 col-8 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Go</button>
                    </form>
                </div>
                <div className="dropdown d-flex justify-content-end ml-4 mr-4">
                    <label className="label mt-4">{user}</label>
                    <button className="btn" onClick={goToCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </button>
                    <div className="nav-link mt-3 dropdown-toggle">
                        <button type="button" className="btn nav-item mg-auto text-white mb-3 mr-3 navbar-toggler-icon" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false"></button>
                        <div className="dropdown-menu align-self-end" aria-labelledby="navbarDropdownMenuLink">
                            <button className="dropdown-item" onClick={() => goToProducts()}>Products</button>
                            <button className="dropdown-item" onClick={() => goToSettings()}>Settings</button>
                            <button className="dropdown-item" onClick={() => handleClick()}>{state}</button>
                        </div>
                    </div>
                </div>

            </nav>


        </div>

    );

}

export default Header;