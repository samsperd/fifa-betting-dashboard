import React from 'react'
import './reusablecard.scss'

const ReUsableCard = ({ title, children, className}) => {
  return (
    <div className={`reusableCard ${className}`}>
      {
        title && (
          <div className="reusableCardTitle">
              { title }
          </div>

        )
      }

        <div className="reusableCardBody">
            { children }
        </div>

    </div>
  )
}

export default ReUsableCard