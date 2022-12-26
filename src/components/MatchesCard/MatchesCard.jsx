import React, { useEffect, useRef } from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import moment from 'moment'
import "./matchescard.scss"
import data from '../../database/data'
import Logo from '../Logo/Logo'

const MatchesCard = ({ activeMatchId, nextButton, backButton, clickMatch }) => {


  const matches = data
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const activeItem = card.querySelector('.active');
    const cardRect = card.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();
    if (activeRect.top < cardRect.top || activeRect.bottom > cardRect.bottom) {
      activeItem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeMatchId]);  // console.log(matches);



  return (
    <div className='matchesCard'>
        <div className="matchesCardTitle">
            Upcoming Matches
            <span className="icons">
              <KeyboardArrowLeft onClick={backButton} className='icon' />
              <KeyboardArrowRight onClick={nextButton} className='icon' />

            </span>
        </div>
        <div className="matchesCardBody" ref={cardRef}>
          {
            matches.map((match) => (
                <div className={ activeMatchId === match?.id ? 'matchesCardItem active' : 'matchesCardItem'} key={match?.id} onClick={() => clickMatch(match?.id)}>
                  <div className="status">
                    { moment(match?.startTimestamp).format('ddd, hA') }
                  </div>
                  <div className="teamCard">
                    <div className="team">
                      <span className="teamLogo">
                        <Logo id={ match?.homeTeam?.id } className="logo" />
                      </span>
                      <span className='teamName'>
                        { match?.homeTeam?.name}
                      </span>
                      <span>
                        { match?.homeScore?.display }
                      </span>
                    </div>

                    <div className="team">
                      <span className='teamLogo'>
                        <Logo id={ match?.awayTeam?.id } className="logo" />
                      </span>
                    
                      <span className='teamName'>
                      { match?.awayTeam?.name}
                      </span>
                      <span>
                      { match?.awayScore?.display }
                      </span>
                    </div>

                  </div>
                  {
                    match?.homeScore?.penalties && (
                      <div className="chart">
                      <div className='nm'>
                        pen.

                      </div>
                        <div className="aggregate">
                          <div className="teamOne">({ match?.homeScore?.penalties })</div>
                          <div className="teamTwo">({ match?.awayScore?.penalties })</div>
                        </div>
                      </div>

                    )
                  }
                </div>
            
            ))
          }

        </div>
    </div>
  )
}

export default MatchesCard