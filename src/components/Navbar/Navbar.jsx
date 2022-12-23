import React from 'react'
import "./navbar.scss"
import face from '../../assets/images/face-5.jpeg'
import { FiberManualRecord, Notifications, SearchOutlined, SortOutlined } from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            {/* <div className="wrapperMenu">

            </div> */}

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
                    <span className="imgBox">
                    <img src={face} alt="" className='img' />
                    </span>
                    <span className='dets'>
                        <h4>Obinna Iloeje</h4>
                        <p>$5000</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
