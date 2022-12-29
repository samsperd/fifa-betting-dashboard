import React, { useState } from 'react'
import AdCard from '../../components/AdCard/AdCard'
import Card from '../../components/Card/Card'
import LineupCard from '../../components/LineupCard/LineupCard'
import MatchesCard from '../../components/MatchesCard/MatchesCard'
import OddsTable from '../../components/OddsTable/OddsTable'
import "./home.scss"
import data from "../../database/data";
import Geek from '../../components/geek/Geek'

const Home = () => {

  const matchesIds = data.map(match => match.id)
  console.log(matchesIds);

  const [currentMatch, setCurrentMatch] = useState(matchesIds[0])

  let currentIndex = matchesIds.indexOf(currentMatch)

  const handleNextButton = () => {

    currentIndex++

    if (currentIndex >= matchesIds.length) {
      currentIndex = 0
    }

    setCurrentMatch(matchesIds[currentIndex])

    console.log(currentMatch);
  }
  
  
  const handlePreviousButton = () => {

    currentIndex--

    if (currentIndex < 0) {
      currentIndex = matchesIds.length - 1
    }

    setCurrentMatch(matchesIds[currentIndex])

    console.log(currentMatch);
  }

  const handleClickMatch = (value) => {
    setCurrentMatch(value)
  }


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
        <MatchesCard activeMatchId={currentMatch} nextButton={handleNextButton} backButton={handlePreviousButton} clickMatch={handleClickMatch} />
        <Card activeMatchId={currentMatch} />
        <LineupCard />
      </div>

      <div className="todayInfo">

      <OddsTable matchId={currentMatch} />

      <Geek />

      </div>



    </div>
  )
}

export default Home