function Awards(){
    return(
        <>
            <div className="container mt-5 p-4">
                <div className="row fs-5">
                    <div className="col-lg-6 col-md-12 p-5">
                        <img src='/images/largestBroker.svg' style={{width:'90%'}}></img>
                    </div>
                    <div className="col-lg-6 col-md-12 p-5">
                        <h1>Largest Stock Broker in India</h1>
                        <p className="mb-5 text-muted">2+ millions Equitrade clients contribute to over 15% if all retail order volumes in India daily by trading and investing in various</p>
                        <div className="row text-muted">
                            <div className="col-6">
                                <ul>
                                    <li><p>Future and options</p></li>
                                    <li>Stocks & IPOs</li>
                                    <li>Commodity derivatives</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Direct mutual Funds</li>
                                    <li>Currency derivatives</li>
                                    <li>Bonds and Govt. securities</li>
                                </ul>
                            </div>
                        </div>
                        <img src='/images/pressLogos.png' style={{width:'100%'}}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Awards;