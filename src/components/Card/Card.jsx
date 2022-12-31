import { CircleOutlined, FiberManualRecord, SquareOutlined, Star, StarOutlineOutlined } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import "./card.scss"
import data from '../../database/data'
import { useState } from 'react'
import Logo from '../Logo/Logo'
import { useSelector } from 'react-redux'

const Card = () => {

    const [isLive, setIsLive] = useState(true)
    const [starBG, setStarBG] = useState(false)
    const matchId = useSelector(state => state.matchId.matchId);

    const matchObj = data.find(obj => obj.id === matchId);
    
    return (
        <div className='card'>
            <div className="cardTitle">
                <span className={ isLive ? 'cardTitleLive on' : 'cardTitleLive off'}>
                    <FiberManualRecord className='icon' />
                    Live
                </span>

                <div className='cardTitleText'>
                    { matchObj?.roundInfo?.name }
                </div>

                <div className='cardTitleIcons'>
                    {
                        starBG ? (<Star style={{ color: 'goldenrod' }} onClick={() => setStarBG(!starBG)} className='icon' />) : (<StarOutlineOutlined className='icon' onClick={() => setStarBG(!starBG)} />)
                    }
                    

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
                                    72<span>'</span>
                                </small>
                                <h1 className='mainc'> <span className={ matchObj?.homeScore?.display > matchObj?.awayScore?.display ? 'gold' : undefined} >{ matchObj?.homeScore?.display }</span> : <span className={ matchObj?.awayScore?.display > matchObj?.homeScore?.display ? 'gold' : undefined}>{ matchObj?.awayScore?.display }</span> </h1>

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