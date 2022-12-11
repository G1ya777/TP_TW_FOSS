import { useNavigate, useParams } from 'react-router-dom';
import Flower from './other/Flower';
import Footer from './footer'
import { useState, useEffect } from 'react';
import { getNumberOfFlowers, getFlowerArray } from '../control/getters'

var loaded = false;

function Products() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [numberOfFlowers, setNumberOfFlowers] = useState(0);
    const [flowerArray, setFlowerArray] = useState([]);

    useEffect(() => {
        getNumberOfFlowers().then(value => {
            setNumberOfFlowers(value)
            getFlowerArray(id, value.value).then(value => setFlowerArray(value))
            setPage(id)
        })
        loaded = true

    }, [id]);







    const [page, setPage] = useState(id);

    const pageSetFunction = async (event) => {

        var Page = event.currentTarget.id;
        if ((parseInt(Page) > 0 && Page <= numberOfFlowers.value) || Page === 'last') {
            if (Page === 'last')

                Page = numberOfFlowers.value
            setPage(Page)
            getFlowerArray(Page, numberOfFlowers.value).then(value => setFlowerArray(value))
            navigate(`/products/${Page}`)
        }
    }




    if (loaded && flowerArray != 404) return (

        <div className="">
            <h1 className='text-center mt-5 text'>Our Products</h1>
            <div className='mx-auto mt-5' style={{ width: 250 }}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" id={1} onClick={pageSetFunction}>First</button></li>
                        <li className="page-item"><button className="page-link" id={parseInt(page) - 1} onClick={pageSetFunction}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z" />
                            </svg>
                        </button>
                        </li>
                        <li className="page-item"><button className="page-link" id={parseInt(page)} onClick={pageSetFunction}>{parseInt(page)}</button></li>
                        <li className="page-item"><button className="page-link" id={parseInt(page) + 1} onClick={pageSetFunction}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
                            </svg>
                        </button>
                        </li>
                        <li className="page-item"><button className="page-link" id='last' onClick={pageSetFunction}>Last</button></li>
                    </ul>
                </nav>
            </div>

            <div className="row mt-5">

                {
                    flowerArray.map(
                        (flower) => (<Flower flower={flower} />))}


            </div>
            <div className='mx-auto mt-5 mb-3' style={{ width: 250 }}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" id={1} onClick={pageSetFunction}>First</button></li>
                        <li className="page-item"><button className="page-link" id={parseInt(page) - 1} onClick={pageSetFunction}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z" />
                            </svg>
                        </button>
                        </li>
                        <li className="page-item"><button className="page-link" id={parseInt(page)} onClick={pageSetFunction}>{parseInt(page)}</button></li>
                        <li className="page-item"><button className="page-link" id={parseInt(page) + 1} onClick={pageSetFunction}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
                            </svg>
                        </button>
                        </li>
                        <li className="page-item"><button className="page-link" id='last' onClick={pageSetFunction}>Last</button></li>
                    </ul>
                </nav>
            </div>
            <Footer />
        </div>
    )

    else if (!loaded) return (
        <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>)
    else if (flowerArray == 404) navigate('/404')

}

export default Products;