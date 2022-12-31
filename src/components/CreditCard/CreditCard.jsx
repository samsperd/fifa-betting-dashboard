import React, { useState } from 'react'
import './CreditCard.scss'
import Cards from 'react-credit-cards-2'
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from './filters'

const CreditCard = () => {

    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [cvc, setCvc] = useState('')
    const [expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')



  return (
    <div className='creditcard'>
        <div className="formBox">
                <div className="credit">
                    <Cards
                        cvc={cvc}
                        expiry={expiry}
                        focused={focus}
                        name={name}
                        number={number}
                    />

                </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="formInput">
                    <label htmlFor="cardNumber"> Card Number </label>
                    <input 
                        type="tel"
                        name="number"
                        id='cardNumber'
                        required
                        placeholder='2348 1634 6341 7000' value={formatCreditCardNumber(number)}
                        onChange={(e) => setNumber(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                </div>

                <div className="formInput">
                    <label htmlFor="cardName"> Card Name </label>
                    <input 
                        type="text"
                        name="name"
                        id='cardName'
                        placeholder='Iloeje Obinna' value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                </div>


                <div className="formInput">
                    <label htmlFor="cardExpiry"> Expiry Date </label>
                    <input 
                        type="tel"
                        name="expiry"
                        id='cardExpiry'
                        required
                        placeholder='22 / 22' value={formatExpirationDate(expiry)}
                        onChange={(e) => setExpiry(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                </div>


                <div className="formInput">
                    <label htmlFor="cardCvc"> CVC </label>
                    <input 
                        type="tel"
                        required
                        name="cvc"
                        id='cardNumber'
                        placeholder='123' value={formatCVC(cvc)}
                        onChange={(e) => setCvc(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                </div>

                <button>
                    Save Card
                </button>
            </form>

        </div>
    </div>
  )
}

export default CreditCard