import { BarChart } from '@mui/icons-material'
import moment from 'moment'
import React from 'react'
import { useGetFootballMatchesQuery } from '../../services/footballApi'
import FetchedImage from '../FetchedImage/FetchedImage'
import "./matchescard.scss"

const MatchesCard = () => {

  const { data, isFetching, isError } = useGetFootballMatchesQuery()

  if (isFetching || isError) {
    return "Loading..."
  }

  const matches = data?.events.filter((item) => item.homeTeam?.disabled !== true)
  // const matches = data?.events

  console.log(matches);


  return (
    <div className='matchesCard'>
        <div className="matchesCardTitle">
            Upcoming Matches
        </div>
        <div className="matchesCardBody">
        {/* <FetchedImage type="team" id="1" className="logo" /> */}
          {
            matches.map((match) => (
                <div className="matchesCardItem" key={match?.id}>
                  <div className="status">
                    { moment(match?.startTimestamp).format('ddd, hA') }
                  </div>
                  <div className="teamCard">
                    <div className="team">
                      {/* <span className="logoBox">
                          <FetchedImage id={ match?.homeTeam?.id } className="logo" />
                      </span> */}
                      <span className='teamName'>
                        { match?.homeTeam?.name}
                      </span>
                      {/* <span>
                        0
                      </span> */}
                    </div>

                    <div className="team">
                      {/* <span className="logoBox">
                        <FetchedImage id={ match?.awayTeam?.id } className="logo" />
                      </span> */}
                      <span className='teamName'>
                      { match?.awayTeam?.name}
                      </span>
                      {/* <span>
                        0
                      </span> */}
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