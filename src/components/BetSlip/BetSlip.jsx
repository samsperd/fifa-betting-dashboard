import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReUsableCard from '../ReUsableCard/ReUsableCard'
import './betslip.scss'
import { removeBet, updateStake } from '../../store/slices/betslipSlice';
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Close, KeyboardArrowDown, SportsSoccer } from '@mui/icons-material'
import { useEffect } from 'react';

const BetSlip = () => {

    const dispatch = useDispatch()

    const [loadCode, setLoadCode] = useState('')

    const [value, setValue] = useState('1');

    const [toggleSlip, setToggleSlip] = useState(false)

    const bets = useSelector(state => state.betslip.bets)

    const totalOdds = useSelector(state => state.betslip.totalOdds)
    
    const totalAmount = useSelector(state => state.betslip.totalAmount)

    const stake = useSelector(state => state.betslip.stake)
    
    useEffect(() => {

        if (bets.length > 0) {
            setValue('2')
            
        }
         else {
            setValue('1')
        }
    
      
    }, [bets.length])
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleStake = (e) => {

        dispatch(updateStake(e.target.value))
    }

    const handleRemove = (id) => {
        dispatch(removeBet(id))
    }
    
    
    
    return (
        <>
            <div className={`toggleQueries ${ toggleSlip ? 'open' : undefined }`}>
                <ReUsableCard className={'toggleCard'}>
                    <div className="bettingSlip">
                        <div className='goDown' onClick={() => setToggleSlip(!toggleSlip)}>
                            <KeyboardArrowDown className='icon' />
                        </div>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">

                                {
                                    bets.length > 0 && (
                                
                                    <Tab label="Betslip" value="2" />

                                    )
                                }
                                    <Tab label="Load a Code" value="1" />
                                </TabList>
                                </Box>
                                {
                                    bets.length > 0 && (
                                
                                        <TabPanel value="2">

                                        <div className='bets'>
                                            {
                                                bets.map((e, i) => (
                                                    <div className="bettingList" key={i}>
                                                        <div className="removeButton" onClick={() => handleRemove(e.eventId)}>
                                                            <Close className='icon' />
                                                        </div>

                                                        <div className="game">
                                                            <div className="type">
                                                                <SportsSoccer className='icon' stroke='2px' />
                                                                { e.choiceName }
                                                            </div>
                                                            <div className="competition">
                                                                { e.matchName }

                                                            </div>

                                                            <div className="market">
                                                                { e.marketName }
                                                            </div>

                                                        </div>

                                                        <div className="odd">
                                                            { e.choiceOdd }
                                                        </div>
                                                    </div>

                                                ))
                                            }

                                        </div>

                                        {
                                            bets.length > 0 && (
                                                <div className="totalling">
                                                    <div className="tto">
                                                        <div className="title">
                                                            Total Odds
                                                        </div>
                                                        <div className="body">
                                                            { totalOdds }
                                                        </div>
                                                    </div>
                                                    <div className="tto">
                                                        <div className="title">
                                                            Stake
                                                        </div>
                                                        <div className="body">
                                                            <input type="number" onChange={handleStake} value={stake} />
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="tto win">
                                                        <div className="title">
                                                            Potential Winnings
                                                        </div>

                                                        <div className="body">
                                                            {`$${ totalAmount }`}
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="placeBet">
                                                        <button>
                                                            Place Bet
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        
                                        </TabPanel>
                                    )
                                }
                                <TabPanel value="1">
                                    <div className='lac'>

                                        <input type="text" value={loadCode} maxLength={6} onChange={(e) => setLoadCode(e.target.value)} placeholder='3xm3em' />

                                            <button>
                                                Load Code
                                            </button>

                                    </div>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </ReUsableCard>


            </div>
            
            {
                !toggleSlip && (
                    <span className="floatingButton" onClick={() => setToggleSlip(!toggleSlip)}>
                        <span className="betCount">
                            { bets.length }
                        </span>
                        <span>
                            BETSLIP
                        </span>
                    </span>

                )
            }
        </>
)
}

export default BetSlip