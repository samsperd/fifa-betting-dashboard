import React, { useState } from 'react';
import './OddsButton.scss'
import logo from '../../logo.svg'


const OddButton = () => {


  return (
    <div className="oddbutton">
      Odds button
      <div className="container">
        <div className="card">
          <div className='card-text'>
            <h5> App sub</h5>
            <p>
              jgjmldf k fgdufgdjkfd jkvfdfh uidgfjdvfdnf jfgdhd i dgfdgdifdemdv 9defjdf dvudhjd vdigdehfg
            </p>
          </div>
          <div className="cover">
            <div className="coverFront">
              <div className="">
                <h5> Apps </h5>
                <img src={logo} alt="" className="sh_img" />
              </div>
            </div>
            <div className="coverBack"> Book </div>
          </div>
        </div>
      </div>

      <div className="btnContainer">
        <div className="btn">
          <div className="btn_cover">
            <div className="btn_front_cover">
              2.75
            </div>
            <div className="btn_back_cover">

              <div className="btn_text">
                2.75
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  )
}

export default OddButton
    // {/* <section className="container">      
    //   <div className="folder">
    //     <div className="paper js">.js</div>
    //     <div className="paper css">.css</div>
    //     <div className="paper html">.html</div>
    //   </div>
    // </section> */}