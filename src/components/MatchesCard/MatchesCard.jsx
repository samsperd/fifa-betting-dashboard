import React, { useEffect, useRef } from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import moment from 'moment'
import "./matchescard.scss"
import data from '../../database/data'
import Logo from '../Logo/Logo'
import { useDispatch, useSelector } from 'react-redux';
import { setMatchId, next, prev } from '../../store/slices/matchSlice';

const MatchesCard = ({ activeMatchId, nextButton, backButton, clickMatch }) => {

    // Declare a dispatch function using the useDispatch hook
    const dispatch = useDispatch();

    // Declare variables to hold the match id and current index using the useSelector hook
    const matchId = useSelector(state => state.matchId.matchId);
  
    // Create a function to handle the next button click
    const handleNextClick = () => {
      // Dispatch the next action
      dispatch(next());
    }
  
    // Create a function to handle the previous button click
    const handlePrevClick = () => {

      dispatch(prev());
    }

  
  


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
  }, [matchId]);  // console.log(matches);



  return (
    <div className='matchesCard'>
        <div className="matchesCardTitle">
            Upcoming Matches
            <span className="icons">
              <KeyboardArrowLeft onClick={handlePrevClick} className='icon' />
              <KeyboardArrowRight onClick={handleNextClick} className='icon' />

            </span>
        </div>
        <div className="matchesCardBody" ref={cardRef}>
          {
            matches.map((match) => (
                <div className={ matchId === match?.id ? 'matchesCardItem active' : 'matchesCardItem'} key={match?.id} onClick={() => dispatch(setMatchId(match?.id))}>
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