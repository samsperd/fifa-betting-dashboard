import { AccountCircle, BarChart, Close, Dashboard, Logout, Newspaper, Receipt, SportsSoccer, Subscriptions } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./sidebar.scss"

const Sidebar = ({ toggler, closeNav }) => {
  return (
    <div className={ toggler ? "sidebar open" : "sidebar"}>
      <div className="top">
        <IconButton aria-label='close' onClick={closeNav} className='close' size='small'>
          <Close fontSize='inherit' />
        </IconButton>
        <span className="logo">
          <SportsSoccer className='logoBall' />
          FIFA<span className='logoSpan'>Bet</span>
        </span>
      </div>
      <div className="hr">
        <hr />
      </div>

      <div className="center">
        <ul>
          <p className='title'>
            Main
          </p>
          <div className="listItems">
            <NavLink to={'/'} className={({ isActive }) => isActive ? "active" : undefined}>
              <li>
                <Dashboard className='icon' />
                <span>
                  Dashboard
                </span>
              </li>

            </NavLink>

            <Link to={'/'}>
              <li>
                <BarChart className='icon' />
                <span>
                  Statistics
                </span>
              </li>


            </Link>


            <Link to={'/'}>
            <li>
              <Subscriptions className='icon' />
              <span>
                Highlights
              </span>
            </li>
            </Link>

            <NavLink to={'/news'} className={({ isActive }) => isActive ? "active" : undefined}>
            <li>
              <Newspaper className='icon' />
              <span>
                News
              </span>
            </li>
            </NavLink>

          </div>

          <p className='title'>
            Account
          </p>
          <div className="listItems">
          <Link to={'/'}>
              <li>
                <Receipt className='icon' />
                <span>
                  Transactions
                </span>
              </li>
            </Link>

            <Link to={'/'}>
              <li>
                <AccountCircle className='icon' />
                <span>
                  Profile
                </span>
              </li>
            </Link>
            <Link to={'/'}>
              <li>
                <Logout className='icon' />
                <span>
                  Logout
                </span>
              </li>
            </Link>
          </div>
        </ul>
      </div>
      <div className="bottom">
        <div>
          Box
        </div>
      </div>
    </div>
  )
}

export default Sidebar