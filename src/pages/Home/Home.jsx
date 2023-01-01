import React from 'react'
import AdCard from '../../components/AdCard/AdCard'
import Card from '../../components/Card/Card'
import LineupCard from '../../components/LineupCard/LineupCard'
import MatchesCard from '../../components/MatchesCard/MatchesCard'
import OddsTable from '../../components/OddsTable/OddsTable'
import "./home.scss"
import PaymentAndBets from '../../components/PaymentAndBets/PaymentAndBets'

const Home = () => {


  return (
    <div className='home'>
      <div className='greetings'>
        <h3>
          Welcome back, Obinna!
        </h3>
      </div>

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

      <PaymentAndBets />

      </div>




    </div>
  )
}

export default Home