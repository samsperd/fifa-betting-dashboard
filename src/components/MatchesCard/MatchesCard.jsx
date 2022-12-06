import { BarChart } from '@mui/icons-material'
import React from 'react'
import { useGetFootballMatchesQuery } from '../../services/footballApi'
import "./matchescard.scss"

const MatchesCard = () => {

  const { data, isFetching } = useGetFootballMatchesQuery()

  if (isFetching) {
    return "Loading..."
  }

  const matches = data?.data

  console.log(data?.data);


  return (
    <div className='matchesCard'>
        <div className="matchesCardTitle">
            Upcoming Matches
        </div>
        <div className="matchesCardBody">
          {
            matches.map((match) => (
              <>
                {
                match?.away_team && (

                <div className="matchesCardItem" key={match?.id}>
                  <div className="status">
                    10:00
                  </div>
                  <div className="teamCard">
                    <div className="team">
                      <span className="logoBox">
                        <img src={match?.home_team?.logo} className="logo" alt="" />
                      </span>
                      <span className='teamName'>
                        { match?.home_team?.name}
                      </span>
                      <span>
                        0
                      </span>
                    </div>

                    <div className="team">
                      <span className="logoBox">
                        <img src={match?.away_team?.logo} className="logo" alt="" />
                      </span>
                      <span className='teamName'>
                      { match?.away_team?.name}
                      </span>
                      <span>
                        0
                      </span>
                    </div>

                  </div>

                  <div className="chart">
                    <BarChart className='icon' />
                  </div>
                </div>
                )
            }


              </>


          ))
          }

        </div>
    </div>
  )
}

export default MatchesCard