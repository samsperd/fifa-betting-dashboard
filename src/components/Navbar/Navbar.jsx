import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="tabs">
                <div className="search">
                    Today
                </div>
                <div className="search">
                    Yesterday
                </div>
                <div className="search">
                    Tomorrow
                </div>
            </div>
            <div className="personal">
                <div className="profile">
                    <span className="img">

                    </span>
                    {/* <span className='dets'>
                        <h5>First Lastname</h5>
                        <p>$5000</p>
                    </span> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar