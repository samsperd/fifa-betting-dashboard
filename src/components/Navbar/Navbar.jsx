import React from 'react'
import "./navbar.scss"
import face from '../../assets/images/face-5.jpeg'
import { MoreVertOutlined, Notifications, SearchOutlined } from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">

            <div className="wrapperGreeting">
                <h3>
                    Welcome back, Sammy!
                </h3>
            </div>


            {/* <div className="tabs">
                <div className="tab">
                    Today
                    <small>
                        29th, Oct 2022
                    </small>
                    <hr />
                </div>
                <div className="tab">
                    Yesterday
                    <small>
                        29th, Oct 2022
                    </small>
                    <hr />
                </div>
                <div className="tab">
                    Tomorrow
                    <small>
                        29th, Oct 2022
                    </small>
                    <hr />
                </div>
            </div> */}
            <div className="personal">
            <div className="search">
                <input type="text" />
                <SearchOutlined className='icon' />
            </div>
                <div className="profile">
                    {/* <span className="iconSpan">
                        <MoreVertOutlined className='icon' />
                    </span> */}
                    <span className="iconSpan">
                        <Notifications className='icon' />
                    </span>
                    <span className="imgBox">
                    <img src={face} alt="" className='img' />
                    </span>
                    <span className='dets'>
                        <h4>First Lastname</h4>
                        <p>$5000</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar