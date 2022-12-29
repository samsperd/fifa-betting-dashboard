import React, { useState } from 'react'
import './geek.scss'
import Cards from 'react-credit-cards-2'

const Geek = () => {

    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [cvc, setCvc] = useState('')
    const [expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')

    
  return (
    <div className='geek'>
        

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
            <form>
                <div className="formInput">
                    <label htmlFor="cardNumber"> Card Number </label>
                    <input 
                        type="tel"
                        name="number"
                        id='cardNumber'
                        required
                        maxLength={'16'}
                        placeholder='2348163463417' value={number}
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
                        maxLength={'4'}
                        placeholder='22 / 22' value={expiry}
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
                        maxLength={'3'}
                        placeholder='123' value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                </div>

                <button>
                    Save Card
                </button>
            </form>

        </div>

        <div className="ordersCard">
            <div className="ordersCardTitle">
                Order
            </div>

            <div className="ordersCardBody">
                Body is here
            </div>
        </div>

    
    </div>
  )
}

export default Geek