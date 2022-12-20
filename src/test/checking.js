import React from 'react'
import logo from '../../logo.svg'


const checking = () => {
  return (
    <div className="other">
    <main className="main">
      
      <section className="card-area">

          {/* <!-- Card: City --> */}
          <section className="card-section">
              <div className="card">
                  <div className="flip-card">
                      <div className="flip-card__container">
                          <div className="card-front">
                              <div className="card-front__tp card-front__tp--city">
                              <img src={logo} alt="" className="sh_img" />
                             <h2 className="card-front__heading">
                              City break
                          </h2>
                          <p className="card-front__text-price">
                              From £29
                          </p>
                              </div>

                              <div className="card-front__bt">
                                  <p className="card-front__text-view card-front__text-view--city">
                                      View me
                                  </p>
                              </div>
                          </div>
                          <div className="card-back">
                            Card One Back
                          </div>
                      </div>
                  </div>

                  <div className="inside-page">
                      <div className="inside-page__container">
                          <h3 className="inside-page__heading inside-page__heading--city">
                              For urban lovers
                          </h3>
                          <p className="inside-page__text">
                             As cities never sleep, there are always something going on, no matter what time!
                          </p>
                          <a href="/" className="inside-page__btn inside-page__btn--city">View deals</a>
                      </div>
                  </div>
              </div>
          </section>

          {/* <!-- Card: Ski --> */}
          <section className="card-section">
              <div className="card">
                  <div className="flip-card">
                      <div className="flip-card__container">
                          <div className="card-front">
                              <div className="card-front__tp card-front__tp--ski">
                              <img src={logo} alt="" className="sh_img" />
                                            <h2 className="card-front__heading">
                                                 Ski trip
                                             </h2>
                                             <p className="card-front__text-price">
                                                 From £199
                                             </p>
                              </div>

                              <div className="card-front__bt">
                                  <p className="card-front__text-view card-front__text-view--ski">
                                      View me
                                  </p>
                              </div>
                          </div>

                          <div className="card-back">
                            Card Two Back
                          </div>
                      </div>
                  </div>

                  <div className="inside-page">
                      <div className="inside-page__container">
                          <h3 className="inside-page__heading inside-page__heading--ski">
                              For snow lovers
                          </h3>
                          <p className="inside-page__text">
                             Love snow? Why not take up exciting ski-in sessions and hit the slope? 
                          </p>
                          <a href="/" className="inside-page__btn inside-page__btn--ski">View deals</a>
                      </div>
                  </div>
              </div>
          </section>

          {/* <!-- Card: Beach --> */}
          <section className="card-section">
              <div className="card">
                  <div className="flip-card">
                      <div className="flip-card__container">
                          <div className="card-front">
                              <div className="card-front__tp card-front__tp--beach">
                              <img src={logo} alt="" className="sh_img" />
                            
                                             <h2 className="card-front__heading">
                                                 Beach time
                                             </h2>
                                             <p className="card-front__text-price">
                                                 From £229
                                             </p>
                              </div>

                              <div className="card-front__bt">
                                  <p className="card-front__text-view card-front__text-view--beach">
                                      View me
                                  </p>
                              </div>
                          </div>
                          <div className="card-back">
                            Card Three Back
                          </div>
                      </div>
                  </div>

                  <div className="inside-page">
                      <div className="inside-page__container">
                          <h3 className="inside-page__heading inside-page__heading--beach">
                              For sun lovers
                          </h3>
                          <p className="inside-page__text">
                             Relax and get sun-kissed tan in the sea or take up surfting for an adventure!
                          </p>
                          <a href="/" className="inside-page__btn inside-page__btn--beach">View deals</a>
                      </div>
                  </div>
              </div>
          </section>

      </section>
  </main>

    </div>

  )
}

export default checking