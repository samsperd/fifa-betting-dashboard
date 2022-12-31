import React from 'react'
import './reusablecard.scss'

const ReUsableCard = ({ title, children}) => {
  return (
    <div className='reusablecard'>
        <div className="reusableCardTitle">
            { title }
        </div>

        <div className="reusableCardBody">
            { children }
        </div>

    </div>
  )
}

export default ReUsableCard