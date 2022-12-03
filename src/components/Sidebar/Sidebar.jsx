import { AccountCircle, BarChart, Dashboard, Newspaper, Receipt, SportsSoccer, Subscriptions } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <SportsSoccer className='logoBall' />
          FIFA<span className='logoSpan'>bet</span>
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
            <Link to={'/'}>
              <li>
                <Dashboard className='icon' />
                <span>
                  Dashboard
                </span>
              </li>

            </Link>

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

            <Link to={'/news'}>
            <li>
              <Newspaper className='icon' />
              <span>
                News
              </span>
            </li>
            </Link>

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