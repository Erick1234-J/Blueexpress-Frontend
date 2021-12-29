//CSS
import "../Components/our-services.css";

function Services() {
    return (
        <div className="container-fluid padding_container mt-2 mb-2 radius aos-item ">
            <br/>
            <div className='header-text'>
                <p className='h2'>Our Services</p>
            </div>

            <div className="row row-div">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <i className="fa fa-truck blue_icon icon-style" ></i>
                            <h3>Shipping</h3>
                            <p>We make de</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <i className="fa fa-industry blue_icon service_icons icon-style" ></i>
                            <h3>Storage</h3>
                            <p>We make de</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <i className="fa fa-shopping-cart blue_icon icon-style" ></i>
                            <h3>Shopping</h3>
                            <p>We make de</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;