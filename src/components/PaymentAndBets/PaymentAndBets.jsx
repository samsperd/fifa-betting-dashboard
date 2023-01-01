import React from 'react'
import CreditCard from '../CreditCard/CreditCard'
import BetSlip from '../BetSlip/BetSlip'
import './paymentandbets.scss'



const PaymentAndBets = () => {

  return (
    <div className='paymentandbets'>

        <CreditCard />

        <BetSlip />
    </div>
  )
}

export default PaymentAndBets