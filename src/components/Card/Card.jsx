import { CircleOutlined, FiberManualRecord, SquareOutlined, StarOutlineOutlined } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import "./card.scss"
import data from '../../database/data'
import { useState } from 'react'
import Logo from '../Logo/Logo'

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
                        <Logo id={ matchObj?.homeTeam?.id } className="logo" />
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
                                <h1 className='mainc'> <span className={ matchObj?.homeScore?.display > matchObj?.awayScore?.display && 'gold'} >{ matchObj?.homeScore?.display }</span> : <span className={ matchObj?.awayScore?.display > matchObj?.homeScore?.display && 'gold'}>{ matchObj?.awayScore?.display }</span> </h1>

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

                    {
                        isLive ?
                        matchObj?.homeScore?.penalties && (
                            <h5>pen. ( <span className={ matchObj?.winnerCode === 1 ? 'gold' : 'black'} >{ matchObj?.homeScore?.penalties }</span> : <span className={ matchObj?.winnerCode === 2 ? 'gold' : 'black'}>{ matchObj?.awayScore?.penalties }</span> ) </h5>
                        )
                        :
                        (
                            <small className='matchInfo'>
                                Referee: <span>Joseph Hicks</span>
                            </small>

                        )
                    }
                

                    <div className='oddsButtons'>
                        <button>2.13</button>
                        <button>1.98</button>
                        <button>3.24</button>
                    </div>
                </div>
                <div className="team">
                <div className="teamLogo">
                <Logo id={ matchObj?.awayTeam?.id } className="logo" />
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