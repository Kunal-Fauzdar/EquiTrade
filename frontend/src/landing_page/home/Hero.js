function Hero(){
    return(
        <div className="container p-3">
            <div className="row text-center mb-5">
                <img src = '/images/homeHero.png' style={{margin:'auto',width:'100%'}} alt='Home Hero' ></img>
                <h1 className="mt-5 mb-3">Invest In Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary mt-3" style={{width:'30%',margin:'auto',fontSize:'1.15rem'}}>Signup Now </button>
            </div>
        </div>
    );
}
export default Hero;