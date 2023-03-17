import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import React from 'react';

function Register_coop() {
    return (
        <div>
        <title>Mihary'ket - Inscription coopérative</title>
        <section className="vh-100 bg-image"
            style={{backgroundImage : "url(/src/images/hero_6.jpg)", overflowY : "hidden"}}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 go-right" data-aos="fade-up">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card space-card" style={{borderRadius : '15px'}}>

                                <div className="card-body p-4">
                                <h4 className="text-uppercase text-center mb-5">Inscription en tant que coopérative</h4>

                                    <form>

                                        <div className="form-outline mb-2">
                                        <label style={{marginRight : "auto", fontSize : "16px"}}>Nom de la coopérative</label>
                                        <input type="text" id="registerName" className="form-control" required="required"/>
                                        </div>

                                        <div className="form-outline mb-2">
                                        <label style={{marginRight : "auto", fontSize : "16px"}}>Adresse</label>
                                        <input type="text" id="registerName" className="form-control" required="required"/>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px"}}>NIF</label>
                                                <input type="text" id="registerAddress" className="form-control" required="required" maxLength={10}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px"}}>STAT</label>
                                                <input type="text" id="registerEmail" className="form-control" required="required" maxLength={17} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                        <label style={{marginRight : "auto", fontSize : "16px"}}>Nom du responsable</label>
                                        <input type="text" id="registerContact" className="form-control" required="required" />
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px"}}>Contact</label>
                                                <input type="text" id="registerPass1" className="form-control" required="required" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px"}}>Email</label>
                                                <input type="email" id="registerPass2" className="form-control" required="required" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px"}}>Mot de passe</label>
                                                <input type="password" id="registerPass1" className="form-control" required="required" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px"}}>Confirmer Mot de passe</label>
                                                <input type="password" id="registerPass2" className="form-control" required="required" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="form-check d-flex justify-content-center mb-5" data-aos="fade-up">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            J'ai lu et accepté les <a href="#!" className="text-body"><u>Termes et conditions d'utilisation</u></a>
                                        </label>
                                        </div> */}

                                        <div className="d-flex justify-content-center">
                                        <button type="button"
                                            className="btn btn-success btn-rounded btn-lg gradient-custom-4 px-5 text-white">S'inscrire</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Déjà inscrit? <Link id="loginLink" to="/authentification"
                                            className="fw-bold text-body">Se connecter</Link></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Routes>
          <Route to="/authentification/*" element={<Login />}/>
        </Routes>
      </div>
    )
  }
  
export default Register_coop