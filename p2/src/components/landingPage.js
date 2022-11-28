import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

function LandingPage () {

    return (

        <div>
            <div className="row">
                <div className="col-2 d-none d-xl-block">

                    <div className="card mt-3 d-none d-lg-block">
                        <div className="card-body">
                            <h5 className="card-title"> Flowering good ideas.</h5>
                            <p className="card-text">Voluptas in nam ea omnis. Qui dolore autem accusamus inventore veritatis perferendis qui. Voluptatum hic eaque sed quia maxime. Distinctio temporibus culpa iusto voluptas qui ullam eius aut enim. Culpa repellat illum laboriosam rerum temporibus. Praesentium error eos rerum occaecati.
                                Aut voluptatem minus facilis iure officiis veniam aut expedita.
                                Alias voluptas architecto minima eveniet porro voluptas ea quia.
                                Suscipit enim aliquam illum ea ut.
                                Officia culpa delectus totam occaecati. Deserunt maiores ex. Ut et consectetur quaerat. Explicabo consequatur est omnis voluptatem. Quo enim nihil voluptatem dicta reprehenderit sequi officia possimus.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid col-xl-8 col-lg-12">
                    <div id="carouselExampleControls" className="carousel slide mt-3" data-ride="carousel">
                        <div className="carousel-inner rounded">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src={img1} alt='' ></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="font-weight-bold text-light">All you need is love and a flower shop</h3>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src={img2} alt=''></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="font-weight-bold text-light">Feel the blossom</h3>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src={img3} alt=''></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="font-weight-bold text-light">Better flowers. Lower prices.</h3>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src={img4} alt=''></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="font-weight-bold text-light">Feel the power of the flower.</h3>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-3 d-none d-xl-block">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Flowers say it better</h5>
                            <p className="card-text">quisquam ea dolorem Minima ipsam excepturi ut omnis adipisci. In unde dolor voluptate voluptatem qui. Totam molestiae qui. Fugiat vel ducimus et id sed. Quia eum cumque consequuntur. Voluptate voluptatum quas architecto similique error suscipit occaecati. Dolor eum accusamus saepe nostrum veniam aspernatur quia corporis tenetur. Et voluptatem consequuntur eligendi et sint nihil. Nihil aut consequuntur reiciendis at. Sit qui accusantium est a. Voluptatem error ipsa accusantium. Earum est pariatur quo doloribus iusto et explicabo nihil enim. Iste quis fugiat. Qui quisquam ducimus libero sit molestiae eaque sed. Corrupti vel ut sapiente eligendi reiciendis.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">


                <div className="col-lg-3 col-md-6 col-sm-6 mt-3">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">A flower shows love</h5>
                            <p className="card-text">Eum repellat laudantium soluta praesentium error quia quo unde. Optio facilis aspernatur mollitia saepe vel quam quo. Et pariatur repudiandae.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-none d-lg-block mt-3">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Flowers are more than words</h5>
                            <p className="card-text">Eligendi sint eveniet fugit. Eius blanditiis magnam. Molestiae eveniet consequuntur eos. Similique nihil et perspiciatis atque deleniti ut voluptatum nihil cumque. Molestias quidem molestiae ipsa saepe minus quia ut expedita.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-3">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">A symbol of happiness</h5>
                            <p className="card-text">Aut occaecati inventore ut eveniet saepe nam earum voluptas enim. Voluptatum et laudantium ea et cum sit quas temporibus.</p>
                        </div>
                    </div>
                </div>
                <div className='row col-12'>
                <div className="col-3"></div>
                <div className="jumbotron jumbotron-fluid rounded bg-light col-6">
                    <div className="container">
                        <h3 className="display-4">Smell the happiness</h3>
                        <p className="lead">Ut quia occaecati nihil quaerat et inventore. Atque veritatis velit id aut sint velit fuga dolores dolor. Ut nobis quam. Quia amet sunt possimus quia incidunt nostrum facilis.</p>
                    </div>
                </div>
                <div className="col-3"></div>
                </div>

            </div>
        </div>





    );
}

export default LandingPage;