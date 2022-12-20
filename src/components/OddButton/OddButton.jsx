import React from 'react';
import './OddsButton.scss'


const OddButton = ({ selected, sourceId, toggler, keyed, value}) => {


  return (
    <div className="oddbutton">
        <div className="btn">
            <input
                type="radio"
                id={"switcher" + keyed}
                name={"switchToggle"}
                value={`${sourceId}`}
                onChange={toggler}
                checked={selected === sourceId}
            />
          <label htmlFor={'switcher'+ keyed} className="btn_cover">
            <div className="btn_front_cover">
              <div className="btn_text">
                { value }
              </div>
            </div>

            <div className="btn_back_cover">

              <div className="btn_text">
                { value }
              </div>
            </div>
          </label>
        </div>
    </div>
    

  )
}

export default OddButton



// {/* <OddButton selected={parseInt(selected)} sourceId={c.sourceId} toggler={toggleState} value={calculateOdds(c.fractionalValue)} keyed={i} /> */}
