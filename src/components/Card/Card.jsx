import { CircleOutlined, FiberManualRecord, Star, StarOutlineOutlined } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import "./card.scss"
import data from '../../database/data'
import { useState } from 'react'
import Logo from '../Logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import odds from "../../database/odds";
import { addBet, removeBet } from '../../store/slices/betslipSlice'
import { useEffect } from 'react'



function calculateOdds(data) {

    const fraction = data.split('/')
    return  ((parseFloat(fraction[0], [10]) / parseFloat(fraction[1], [10])) + 1).toFixed(2)
}

function joint (name, group) {
    if (group === null) {
        return `${name}`
    }
    else {
        return `${name} ${group}`
    }
}
            

function reference(value) {
    switch (value) {
        case "1":
            return "Home"
        case "2":
            return "Away"
        case "X":
            return "Draw"
        case "1X":
            return "Home or Draw"
        case "X2":
            return "Draw or Away"
        case "12":
            return "Home or Away"
    
        default:
            return value
    }
}


function convertObjectToString(choiceId, choiceOdd, eventId, choiceName, marketName) {
    
    const obj = {

        choiceId,
        choiceOdd,
        eventId,
        choiceName,
        marketName,
    }


    return JSON.stringify(obj)
}


const Card = () => {

    const dispatch = useDispatch()
    const [isLive, setIsLive] = useState(true)
    const [starBG, setStarBG] = useState(false)
    const [ftChoice, setFtChoice] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const matchId = useSelector(state => state.matchId.matchId);
    const bets = useSelector(state => state.betslip.bets)
    
    const watchCost = useSelector(state => state.betslip.totalAmount)
    
    
    const matchObj = data.find(obj => obj.id === matchId);
    const oddsObj = odds.find(obj => obj.eventId === matchId);
    
    const selectedBet = bets.find(obj => obj.eventId === matchId) || {};
    
    useEffect(() => {
      setFtChoice(selectedBet)
    
    }, [watchCost])
    


    const market = oddsObj?.markets[0]

    const c = market?.choices





    const handleChange = (e) => {
        let obj = JSON.parse(e.target.value)
        
        obj["checked"] = e.target.checked

        if (ftChoice === '') {
            setFtChoice(obj)
            
        } else {
            if (parseInt(ftChoice.choiceId) === parseInt(obj.choiceId)) {
                dispatch(removeBet(ftChoice.eventId))
                setFtChoice('')
            } else {
                setFtChoice(obj)
            }

        }
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        
        if (ftChoice === '') {
            return;
        } else {
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 1000);

            const obj = {
                target: {
                    value: JSON.stringify(ftChoice),
                    checked: ftChoice.checked
                }
            }

            dispatch(addBet(obj))

        }
        
    
    }

    
    return (
        <form onSubmit={handleSumbit} className='card'>
            <div className="cardTitle">
                <span onClick={() => setIsLive(!isLive)} className={ isLive ? 'cardTitleLive on' : 'cardTitleLive off'}>
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
                    <CircleOutlined className='icon' />

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
                        <div className="switchItem">
                            <input type="checkbox" value={ convertObjectToString(
                                                    c[0]?.sourceId,
                                                    calculateOdds(c[0]?.fractionalValue),
                                                    matchId,
                                                    joint(reference(c[0].name), market?.choiceGroup),
                                                    market?.marketName
                                                )
                                                } onChange={handleChange} id="switcher" checked={parseInt(ftChoice.choiceId) === parseInt(c[0].sourceId)} />
                            <label htmlFor="switcher"> { calculateOdds(c[0].fractionalValue) } </label>
                        </div>
                        <div className="switchItem">
                            <input type="checkbox" value={ convertObjectToString(
                                                    c[1]?.sourceId,
                                                    calculateOdds(c[1]?.fractionalValue),
                                                    matchId,
                                                    joint(reference(c[1]?.name), market?.choiceGroup),
                                                    market?.marketName
                                                )
                                                } onChange={handleChange} id="switcher" checked={parseInt(ftChoice.choiceId) === parseInt(c[1].sourceId)} />
                            <label htmlFor="switcher"> { calculateOdds(c[1].fractionalValue) } </label>
                        </div>
                        <div className="switchItem">
                            <input type="checkbox" value={ convertObjectToString(
                                                    c[2]?.sourceId,
                                                    calculateOdds(c[2]?.fractionalValue),
                                                    matchId,
                                                    joint(reference(c[2]?.name), market?.choiceGroup),
                                                    market?.marketName
                                                )
                                                } onChange={handleChange} id="switcher" checked={parseInt(ftChoice.choiceId) === parseInt(c[2]?.sourceId)} />
                            <label htmlFor="switcher"> { calculateOdds(c[1]?.fractionalValue) } </label>
                        </div>


                        {/* <button>2.13</button>
                        <button>1.98</button>
                        <button>3.24</button> */}
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
                <button type='submit' disabled={isLoading}>
                        {
                            isLoading ? 'Loading...' : 'Place a Bet'
                        }
                </button>
            </div>
        </form>
    )
}

export default Card