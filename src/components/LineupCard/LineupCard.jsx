import React from 'react'
import "./lineup.scss"
import SoccerLineUp from 'react-soccer-lineup'

const LineupCard = () => {
  return (
    <div className='lineupCard'>
        <div className="lineupCardTitle">
            Line-up
        </div>

        <div className="lineupCardBody">
          <div className="field">
            <SoccerLineUp
              size='responsive'
              color='#550065'
              pattern='lines'
            />

          </div>
        </div>
    </div>
  )
}

export default LineupCard





        // <div className="pitch">
        //   <h4>4-4-2</h4>
        //     <div className="container">
        //       <div className="box1">
        //         <div className="pen1">
        //           <div className="pos" style={{margin: '5px 15px'}}>1</div>
        //         </div>
        //       </div>
        //       <div className="pos" style={{margin: '65px 53px'}}>2</div>
        //       <div className="pos" style={{margin: '65px 126px'}}>3</div>
        //       <div className="pos" style={{margin: "65px 186px"}}>4</div>
        //       <div className="pos" style={{margin: "65px 258px"}}>5</div>

        //       <div className="pos" style={{margin: "130px 53px"}}>6</div>
        //       <div className="pos" style={{margin: "130px 126px"}}>7</div>
        //       <div className="pos" style={{margin: "130px 186px"}}>8</div>
        //       <div className="pos" style={{margin: "130px 258px"}}>9</div>

        //       <div className="pos" style={{margin: "197px 126px"}}>10</div>
        //       <div className="pos" style={{margin: "197px 186px"}}>11</div>

        //       <div className="half"></div>
        //       <div className="box2">
        //         <div className="pen2">
        //         <div className="pos" style={{margin: "197px 186px"}}>11</div>

        //         </div>
        //       </div>
        //     </div>
        // </div>