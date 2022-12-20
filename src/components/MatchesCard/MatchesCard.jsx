import React from 'react'
import { BarChart } from '@mui/icons-material'
import moment from 'moment'
import { useGetFootballMatchesQuery } from '../../services/footballApi'
import "./matchescard.scss"

const MatchesCard = () => {

  const { data, isFetching, isError } = useGetFootballMatchesQuery()

  if (isFetching || isError) {
    return "Loading..."
  }

  const matches = data?.events.filter((item) => item.homeTeam?.disabled !== true)

  console.log(matches);


  return (
    <div className='matchesCard'>
        <div className="matchesCardTitle">
            Upcoming Matches
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