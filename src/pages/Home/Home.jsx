import React from 'react'
import AdCard from '../../components/AdCard/AdCard'
import Card from '../../components/Card/Card'
import MatchesCard from '../../components/MatchesCard/MatchesCard'
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
        <MatchesCard />
        {/* <NewsCard /> */}
        {/* <Card /> */}
      </div>

      <div className="todayInfo">

        <div className="todayTable"></div>
        <div className="todayMatches">

        </div>
      </div>



    </div>
  )
}

export default Home