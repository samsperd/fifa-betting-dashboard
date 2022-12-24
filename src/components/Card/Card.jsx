import { CircleOutlined, FiberManualRecord, SquareOutlined, StarOutlineOutlined } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import "./card.scss"
import data from '../../database/data'
import { useState } from 'react'

const Card = ({ activeMatchId }) => {

    const [isLive, setIsLive] = useState(true)

    const matchObj = data.find(obj => obj.id === activeMatchId);

    console.log('====================================');
    console.log(matchObj);
    console.log('====================================');
    
    return (
        <div className='card'>
            <div className="cardTitle">
                <span className='cardTitleLive'>
                    <FiberManualRecord className='icon' />
                    Live
                </span>

                <div className='cardTitleText'>
                    { matchObj?.roundInfo?.name }
                </div>

                <div className='cardTitleIcons'>
                    <StarOutlineOutlined className='icon' />

                    <Divider orientation='vertical' flexItem />
                    {
                        isLive ? (<CircleOutlined onClick={() => setIsLive(!isLive)} className='icon' />) : (<SquareOutlined onClick={() => setIsLive(!isLive)} className='icon' />)
                    }

                </div>
            </div>
            <div className="cardBody">
                <div className="team">
                    <div className="teamLogo">
                        <StarOutlineOutlined className='icon' />
                    </div>
                    <div className="teamName"> { matchObj?.homeTeam?.name } </div>
                </div>
                <div className="matchStats">
                    {
                        isLive ? (
                            <>
                                    <small className='matchInfo timer'>
                                        72'
                                    </small>
                            <h1> <span style={{ color: matchObj?.winnerCode === 1 ? 'gold' : ''}} >{ matchObj?.homeScore?.current }</span> : <span style={{ color: matchObj?.winnerCode === 2 ? 'gold' : ''}}>{ matchObj?.awayScore?.current }</span> </h1>

                            </>

                        ) : (
                            <>
                            <small className='matchInfo'>
                                12 Aug in <span>19:00</span>
                            </small>
                            <h1> <span >0</span> : <span>0</span> </h1>


                            </>
                        )
                    }
                
                    <small className='matchInfo'>
                        Referee: <span>Joseph Hicks</span>
                    </small>
                    {/* <small className='matchInfo timer'>
                        <span>72'</span>
                    </small> */}
                    <div className='oddsButtons'>
                        <button>2.13</button>
                        <button>1.98</button>
                        <button>3.24</button>
                    </div>
                </div>
                <div className="team">
                <div className="teamLogo">
                    <StarOutlineOutlined className='icon' />
                </div>
                    <div className="teamName"> { matchObj?.awayTeam?.name } </div>
                </div>
            </div>
            <div className="cardActions">
                <button>
                    Place a Bet
                </button>
            </div>
        </div>
    )
}

export default Card