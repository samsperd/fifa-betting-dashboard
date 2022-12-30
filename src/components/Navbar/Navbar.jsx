import React from 'react'
import "./navbar.scss"
import face from '../../assets/images/face-5.jpeg'
import { AccountBalance, AccountBox, DarkMode, FiberManualRecord, LightMode, Logout, Notifications, Receipt, Savings, SearchOutlined, SortOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { lightMode, darkMode } from '../../store/slices/colorMode'

const Navbar = ({ toggleNav }) => {

    const [displayProfile, setDisplayProfile] = useState(false)

    const [displaySearch, setDisplaySearch] = useState(false)
    
    const dispatch = useDispatch()

    const colorMode = useSelector(state => state.colorMode.mode);

    console.log('====================================');
    console.log(colorMode);
    console.log('====================================');

    const handleSearch = () => {
        setDisplayProfile(false)

        setDisplaySearch(!displaySearch)
    }


  return (
    <div className='navbar'>
        <div className="wrapper">

            <div className="wrapperGreeting">
                <SortOutlined onClick={toggleNav} className='icon' />
                <h3>
                    Welcome back, Obinna!
                </h3>
                    {/* <span className="logo">
                <SportsSoccer className='logoBall' />
                FIFA<span className='logoSpan'>Bet</span></span> */}
            </div>




            <div className="personal">
            <div className="search">
                <input type="text" />
                <SearchOutlined onClick={handleSearch} className='icon' />
                {
                    displaySearch && (
                        <div className="searchCard">
                            <input type="text" placeholder='Search...' />
                            <SearchOutlined className='icon' />
                            
                        </div>
                        
                    )
                }
            </div>
                <div className="profile">
                    <span className="iconSpan colorMode">
                        {
                            colorMode === 'light' ?
                            (<LightMode onClick={() => dispatch(darkMode())} className='icon' />)
                            :
                            (<DarkMode onClick={() => dispatch(lightMode())} className='icon' />)
                        }
                        
                    </span>


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
