function Pricing(){
    return(
        <>
            <div className="container p-5">
                <div className="row">
                    <div className=" col-lg-4 col-md-6 p-5 fs-5">
                        <h3 className="mb-4">Unbeatable pricing</h3>
                        <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="#" style={{textDecoration:'none'}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className=" col-lg-2 col-md-0 p-5"></div>
                    <div className=" col-lg-6 col-md-6 p-5">
                        <div className="row text-center">
                            <div className = "col p-4 border" >
                                <h1>₹0</h1>
                                <p>Free equity delivery and direct mutual funds</p>
                            </div>
                            <div className = "col p-4 border" >
                                <h1>₹20</h1>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pricing; 