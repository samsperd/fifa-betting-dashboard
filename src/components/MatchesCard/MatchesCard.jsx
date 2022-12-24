import React from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import moment from 'moment'
import "./matchescard.scss"
import data from '../../database/data'

const MatchesCard = ({ activeMatchId, nextButton, backButton }) => {


  const matches = data

  // console.log(matches);



  return (
    <div className='matchesCard'>
        <div className="matchesCardTitle">
            Upcoming Matches
            <span className="icons">
              <KeyboardArrowLeft onClick={backButton} className='icon' />
              <KeyboardArrowRight onClick={nextButton} className='icon' />

            </span>
        </div>
        <div className="matchesCardBody">
          {
            matches.map((match) => (
                <div className={ activeMatchId === match?.id ? 'matchesCardItem active' : 'matchesCardItem'} key={match?.id}>
                  <div className="status">
                    { moment(match?.startTimestamp).format('ddd, hA') }
                  </div>
                  <div className="teamCard">
                    <div className="team">
                      <span className='teamName'>
                        { match?.homeTeam?.name}
                      </span>
                      <span>
                        { match?.homeScore?.current }
                      </span>
                    </div>

                    <div className="team">
                      <span className='teamName'>
                      { match?.awayTeam?.name}
                      </span>
                      <span>
                      { match?.awayScore?.current }
                      </span>
                    </div>

                  </div>

                  {/* <div className="chart">
                    <BarChart className='icon' />
                  </div> */}
                </div>
            
            ))
          }

        </div>
    </div>
  )
}

export default MatchesCard