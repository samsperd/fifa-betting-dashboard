import { CircleOutlined, FiberManualRecord, StarOutlineOutlined } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import "./card.scss"

const Card = () => {
  return (
    <div className='card'>
        <div className="cardTitle">
            <span className='cardTitleLive'>
                <FiberManualRecord className='icon' />
                Live
            </span>

            <div className='cardTitleText'>
                English Premier League
            </div>

            <div className='cardTitleIcons'>
                <StarOutlineOutlined className='icon' />

                <Divider orientation='vertical' flexItem />

                <CircleOutlined className='icon' />
            </div>
        </div>
        <div className="cardBody">
            <div className="team">
                <div className="teamLogo">
                    <StarOutlineOutlined className='icon' />
                </div>
                <div className="teamName"> Barcelona </div>
            </div>
            <div className="matchStats">
                <small className='matchInfo'>
                    12 Aug in <span>19:00</span>
                </small>
                <h1> <span style={{ color: 'gold'}} >2</span> : <span>0</span> </h1>
                <small className='matchInfo'>
                    Referee: <span>Joseph Hicks</span>
                </small>
                {/* <small className='matchInfo'>
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
                <div className="teamName"> Chelsea </div>
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