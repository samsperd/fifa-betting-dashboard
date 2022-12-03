import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">

            <div className="wrapperGreeting">
                <h3>
                    Welcome back, Sammy!
                </h3>
            </div>

            <div className="tabs">
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