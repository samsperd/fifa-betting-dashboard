import React from 'react'
import AdCard from '../../components/AdCard/AdCard'
import Card from '../../components/Card/Card'
import LineupCard from '../../components/LineupCard/LineupCard'
import MatchesCard from '../../components/MatchesCard/MatchesCard'
import OddsTable from '../../components/OddsTable/OddsTable'
import Geek from '../../components/geek/Geek'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <div className="ad">
        <AdCard />

      </div>
      <div className="todayLiveMatches">
        <MatchesCard />
        <Card />
        <LineupCard />
      </div>

      <div className="todayInfo">

      <OddsTable />
      <Geek></Geek>

        {/* <div className="todayTable"></div>
        <div className="todayMatches"> */}

        {/* </div> */}
      </div>



    </div>
  )
}

export default Home