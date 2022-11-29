import { useState } from 'react'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

var init =[]

if(cookies.get(("cart")))
init = cookies.get(("cart"));


function Flower({ flower }) {


    const [buy, setBuy] = useState(init);

    const plusButton = (event) => {

        const target = event.currentTarget.id
        const id = parseInt(target.split(" ")[1])

        if (!init[id-1] || init[id - 1] < 5) {

            init[id - 1] ? init[id - 1] = init[id - 1] + 1 : init[id - 1] = 1
            cookies.set("cart", (init))
            setBuy(cookies.get(("cart")))
        }
    }

    const minusButton = (event) => {

        const target = event.currentTarget.id
        const id = parseInt(target.split(" ")[1])

        if (!init[id-1] || init[id - 1] > 0) {

            if(init[id - 1])  init[id - 1] = init[id - 1] - 1 ;
            cookies.set("cart", (init))
            setBuy(cookies.get(("cart")))
        }


    }


    return (
        <div className="card-group col-lg-3 col-md-4 col-sm-6 ">
            <div className="card mt-3 ml-3 mr-3 mb-5">
                <img className="card-img-top" alt='' src={flower.img}></img>
                <div className="card-body">
                    <h5 className="card-title">{flower.flower}</h5>
                    <p className="card-text"><small className="text-muted">{flower.price}</small></p>

                </div>
                <div className='row mx-auto mb-3' style={{ margin: 0 }}>
                    <button className="btn btn-warning mr-3" id={flower.flower} onClick={minusButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                    <label className='mt-2'>{buy[flower.flowerId-1] ? buy[flower.flowerId-1] : 0}</label>
                    <button className="btn btn-warning ml-3" id={flower.flower} onClick={plusButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>

                </div>
            </div>

        </div>
    );
}

export default Flower;