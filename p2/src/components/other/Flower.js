

const buyButton = (event) =>{

    console.log(event.currentTarget.id)



}



function Flower({ flower }) {

    return (
        <div className="card-group col-lg-3 col-md-4 col-sm-6 ">
            <div className="card mt-3 ml-3 mr-3 mb-5">
                <img className="card-img-top" alt='' src={flower.img}></img>
                <div className="card-body">
                    <h5 className="card-title">{flower.flower}</h5>
                    <p className="card-text"><small className="text-muted">{flower.price}</small></p>
                    
                </div>
                <button className="btn btn-warning" id={flower.flower} onClick={buyButton}>Buy</button>
            </div>

        </div>
    );
}

export default Flower;