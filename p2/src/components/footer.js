import { useNavigate } from 'react-router-dom'



function Footer() {

    const navigate = useNavigate();

    const goToContact = () => {

        navigate('/contact')

    }

    const goToPrivacy = () => {

        navigate('/privacy')

    }

    const goToLicense = () => {

        navigate('/license')

    }

    const goToHome = () => {

        navigate('/home')

    }

    return (

        <div className="d-flex align-items-center justify-content-center navbar">

            <button onClick={goToHome} className="navbar-brand mr-5 btn text-primary">Flowers</button>
            <span>Id magni culpa asperiores.</span>
            <button onClick={goToContact} className="btn nav-item mg-auto ml-5 text-primary">contact us</button>
            <button onClick={goToPrivacy} className="btn nav-item mg-auto ml-5 text-primary">privacy</button>
            <button onClick={goToLicense} className="btn nav-item mg-auto ml-5 text-primary">license</button>

        </div>

    );
}

export default Footer;