import Flower from "./Flower";
import Cookies from 'universal-cookie';
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const cookies = new Cookies();



function Cart() {

    const location = useLocation();
    const navigate = useNavigate();


    const [flowerArray, setFlowerArray] = useState(location.state.flowerArray)

    const emptyCart = () => {
        cookies.remove('cart', { path: '/' });
        navigate('/home')
        window.location.reload();

    }

    const sendCart = async () => {
    
        await axios.post("/sendCart",cookies.get("cart")).then(
        alert("Your order is being processed, thank you!"))
        .then(emptyCart())
    
    }

    if (flowerArray !== 'flower array sent empty')
        return (
            <div className="col">
                <h1 className='text-center mt-5 text'>Your Cart</h1>
                <div className="row">
                    <div className="mx-auto" style={{ margin: 30 }}>
                        <button onClick={emptyCart} className="btn btn-warning">empty cart
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                        </button>
                        <button onClick={sendCart} className="btn btn-warning ml-3">Confirm
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg></button>
                    </div>

                </div>

                <div className="row mt-5">

                    {
                        flowerArray.map(
                            (flower) => (<Flower flower={flower} />))}


                </div>
            </div>
        )
    else {
        console.log('here')
        alert("Your cart is empty!")
        return (<>empty cart</>)
    }

}

export default Cart;