import React from 'react'
import "./navbar.scss"
import face from '../../assets/images/face-5.jpeg'
import { AccountBalance, AccountBox, FiberManualRecord, Logout, Notifications, Receipt, Savings, SearchOutlined, SortOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { Button } from '@mui/material'

const Navbar = ({ toggleNav }) => {

    const [displayProfile, setDisplayProfile] = useState(false)

  return (
    <div className='navbar'>
        <div className="wrapper">

            <div className="wrapperGreeting">
                <SortOutlined onClick={toggleNav} className='icon' />
                <h3>
                    Welcome back, Obinna!
                </h3>
            </div>


            <div className="personal">
            <div className="search">
                <input type="text" />
                <SearchOutlined className='icon' />
            </div>
                <div className="profile">
            
                    <span className="iconSpan">
                        <Notifications className='icon' />
                        <sup>
                            <FiberManualRecord className='icon' />

                        </sup>
                    </span>
                    <span className="imgBox" onClick={() => setDisplayProfile(!displayProfile)}>
                    <img src={face} alt="" className='img' />
                    </span>
                    <span className='dets' onClick={() => setDisplayProfile(!displayProfile)} >
                        <h4>Obinna Iloeje</h4>
                        <p>$5,000</p>
                    </span>
                </div>

                {
                    displayProfile && (
                        <div className="profileCard">
                            <div className="profile">
                
                                <span className="imgBox">
                                <img src={face} alt="" className='img' />
                                </span>
                                <div className='info'>
                                    <span>Obinna Iloeje</span>
                                    <span>$5,000</span>
                                </div>
                            </div>

                            <hr />

                            <div className='otherSources'>
                                <Button variant='text' startIcon={<AccountBox />}> Profile </Button>
                                <Button variant='text' startIcon={<Receipt />}> Transactions </Button>
                                <Button variant='text' startIcon={<Savings />}> Deposit </Button>
                                <Button variant='text' startIcon={<AccountBalance />}> Withdrawal </Button>
                                <Button variant='text' startIcon={<Logout />}> Logout </Button>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
