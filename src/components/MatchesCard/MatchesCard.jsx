import React from 'react'
import { BarChart, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import moment from 'moment'
import "./matchescard.scss"
import data from './data'

const MatchesCard = () => {


  const matches = data

  console.log(matches);



  return (
    <div className='matchesCard'>
        <div className="matchesCardTitle">
            Upcoming Matches
            <span className="icons">
              <KeyboardArrowLeft className='icon' />
              <KeyboardArrowRight className='icon' />

            </span>
        </div>
        <div className="matchesCardBody">
          {
            matches.map((match) => (
                <div className="matchesCardItem" key={match?.id}>
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

                  <div className="chart">
                    <BarChart className='icon' />
                  </div>
                </div>
            
            ))
          }

        </div>
    </div>
  )
}

export default MatchesCard