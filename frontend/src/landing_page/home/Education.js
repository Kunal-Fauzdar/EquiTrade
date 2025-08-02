function Education() {
    return (
        <>
            <div className="container p-5">
                <div className="row fs-5">
                    <div className="col-lg-6 col-md-12 p-5">
                        <img src='/images/education.svg' style={{width:'80%'}}></img>
                    </div>
                    <div className="col-lg-6 col-md-12 p-5">
                        <h3 className="mb-5">Free and open market education </h3>

                        <p className="mb-3 text-muted">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                        <a href="#" style={{textDecoration:'none'}}>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        <p className="mb-3 mt-3 text-muted">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                        <a href="#" style={{textDecoration:'none'}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
