function Stats(){
    return(
        <>
            <div className="container mt-5 p-4">
                <div className="row fs-5">
                    <div className="col-lg-6 col-md-12 p-3 mt-2">
                        <h3 className="mb-5">Trust with confidence</h3>
                        <h5>Customer-first always</h5>
                        <p className="mb-4 text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        <h5>No spam or gimmicks</h5>
                        <p className="mb-4 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                        <h5>The Zerodha universe</h5>
                        <p className="mb-4 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h5>Do better with money</h5>
                        <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center p-3">
                        <img src='/images/ecosystem.png' style={{width:'80%',margin:'auto'}}></img>
                        <div class="row">
                            <div class="col-6">
                                <a href="#" style={{textDecoration:'none'}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </div>
                            <div class="col-6">
                                <a href="#" style={{textDecoration:'none'}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Stats;