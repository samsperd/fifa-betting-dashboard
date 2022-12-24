import React from 'react'
import "./navbar.scss"
import face from '../../assets/images/face-5.jpeg'
import { FiberManualRecord, Notifications, SearchOutlined, SortOutlined } from '@mui/icons-material'
import { useState } from 'react'

const Navbar = () => {

    const [displayProfile, setDisplayProfile] = useState(false)

  return (
    <div className='navbar'>
        <div className="wrapper">

            <div className="wrapperGreeting">
                <SortOutlined className='icon' />
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
                    <span className='dets' onClick={() => setDisplayProfile(!displayProfile)}>
                        <h4>Obinna Iloeje</h4>
                        <p>$5,000</p>
                    </span>
                </div>

                {
                    displayProfile && (
                        <div className="profileCard">
                            <div className="amount">
                                $5,000
                            </div>
                            <ul>
                                <li> Profile </li>
                                <li> Transactions </li>
                                <li> Deposit </li>
                                <li> Withdraw </li>
                                <li> Logout </li>
                            </ul>
                        </div>

                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
