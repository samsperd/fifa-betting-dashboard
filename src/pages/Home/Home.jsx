import React from 'react'
import AdCard from '../../components/AdCard/AdCard'
import Card from '../../components/Card/Card'
import NewsCard from '../../components/NewsCard/NewsCard'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <div className="ad">
        <AdCard />

      </div>
      <div className="todayLiveMatches">
        <Card />
        {/* <NewsCard /> */}
        <Card />
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