import '../Components/footer.css';

function About() {
    return (
        <footer className="bd-footer py-5 mt-5 bg-dark aos-item " >
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <ul className="list-unstyled small text-muted">
                            <li className="mb-2">Making parcel delivery easier, faster, safer and cheaper</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                        <p className='header-text'>About us</p>
                        <ul >
                            <li className="mb-2"><a href="/" className='a'>Terms & Conditions</a></li>
                            <li className="mb-2"><a href="/" className='a'>Help</a></li>
                            <li className="mb-2"><a href="/" className='a'>How it works</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <p className='header-text'>Shopping Services</p>
                        <ul >
                            <li className="mb-2"><a href="https://www.shopeasywholesale.com" className='a'>Shopeasy</a></li>
                            <li className="mb-2"><a href="https://www.nalumall.com" className='a'>Nalu Mall</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <p className='header-text'>Follow us</p>
                        <ul >
                            <li className="mb-2"><a href="/" className='a'>Facebook</a></li>
                            <li className="mb-2"><a href="/" className='a'>Instagram</a></li>
                            <li className="mb-2"><a href="/" className='a'>Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <p className='header-text'>Contact us</p>
                        <ul >
                            <li className="mb-2"><a href="/" className='a'>+260</a></li>
                            <li className="mb-2"><a href="/" className='a'>Email us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default About;
