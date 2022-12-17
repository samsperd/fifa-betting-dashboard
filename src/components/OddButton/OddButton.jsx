import React, { useState } from 'react';
import './OddsButton.scss'


const OddButton = () => {


  return (
    <section>
          <div className="envelope">
        <div className="arrow-up"></div>
        <div className="arrow-down open"></div>
        <div className="arrow-left"></div>
        <div className="arrow-right"></div>
        <div className="paper">

        </div>
      </div>
      <div className="overlay"></div>



    </section>
    

  )
}

export default OddButton
    // {/* <section class="container">      
    //   <div class="folder">
    //     <div class="paper js">.js</div>
    //     <div class="paper css">.css</div>
    //     <div class="paper html">.html</div>
    //   </div>
    // </section> */}