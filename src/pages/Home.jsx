import videoBG from '../assets/video_1.mp4'

function Home() {

    return (
        <div>           
            <title>Mihary'ket - Page d'accueil</title>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="overlay"></div>
                    <video className="img-fluid" autoPlay loop muted >
                        <source src={videoBG} type='video/mp4'/>
                    </video>
                    <div className="carousel-caption d-none d-md-block centered" data-aos="fade-up">
                        <div className="col-lg-12 justify-content-center mx-auto text-center">
                            <h1>Plateforme de coopératives agricoles pour un commerce équitable afin de soutenir nos agriculteurs.</h1>
                            {/* <h1>Une plateforme coopérative agricole pour le commerce équitable peut aider à soutenir les agriculteurs en permettant la vente directe de leurs produits, en réduisant les intermédiaires et en offrant des prix équitables pour leur travail.io en gras io ilay phrase.</h1> */}
                        </div>
                    </div>
                </div>
            </div>            

            {/* <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7 justify-content-center mx-auto text-center" data-aos="fade-up">
                    <h1>L'agriculture est la meilleure solution à la famine mondiale</h1>
                </div>
                </div>
            </div> */}
    
            {/* <div className="intro-section" style={{"backgroundImage": "url('/src/images/hero_2.jpg')"}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7 justify-content-center mx-auto text-center" data-aos="fade-up">
                    <span className="d-block"></span>
                    <h1>Les légumes bio sont bons pour la santé</h1>
                </div>
                </div>
            </div>
            </div>
    
            <div className="intro-section" style={{"backgroundImage": "url('/src/images/hero_3.jpg')"}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7 justify-content-center mx-auto text-center" data-aos="fade-up">
                    <span className="d-block"></span>
                    <h1>Fournir des produits frais chaque jour</h1>
                </div>
                </div>
            </div>
            </div>
    
            <div className="intro-section" style={{"backgroundImage": "url('/src/images/hero_4.jpg')"}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7 justify-content-center mx-auto text-center" data-aos="fade-up">
                    <span className="d-block"></span>
                    <h1>L'agriculture comme passion</h1>
                </div>
                </div>
            </div>
            </div>
    
            <div className="intro-section" style={{"backgroundImage": "url('/src/images/hero_5.jpg')"}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7 justify-content-center mx-auto text-center" data-aos="fade-up">
                    <span className="d-block"></span>
                    <h1>De la bonne nourriture pour tous</h1>
                </div>
                </div>
            </div>
            </div>
    
            <div className="intro-section" style={{"backgroundImage": "url('/src/images/hero_6.jpg')"}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7 justify-content-center mx-auto text-center" data-aos="fade-up">
                    <span className="d-block"></span>
                    <h1>Les plantes rendent la vie meilleure</h1>
                </div>
                </div>
            </div>
            </div> */}


        </div>
    )
  }
  
  export default Home

  // className="hero-slide owl-carousel site-blocks-cover", style={{"backgroundImage": "url('/src/images/hero_1.jpg')"}}