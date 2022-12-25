import React, { useState } from 'react'
import "./oddstable.scss"
import odds from "../../database/odds";


function calculateOdds(data) {

    const fraction = data.split('/')
    return  ((parseFloat(fraction[0], [10]) / parseFloat(fraction[1], [10])) + 1).toFixed(2)
}

const groupedObjects = 
            (array) => array.reduce((acc, curr) => {

                const index = acc.findIndex(obj => obj.marketId === curr.marketId)

                if (index === -1) {
                    acc.push({ marketId: curr.marketId, name: curr.marketName, lists: [curr]})
                } else {
                    acc[index].lists.push(curr)
                }


                return acc
            }, [])


function reference(value) {
    switch (value) {
        case "1":
            return "Home"
        case "2":
            return "Away"
        case "X":
            return "Draw"
        case "1X":
            return "Home or Draw"
        case "X2":
            return "Draw or Away"
        case "12":
            return "Home or Away"
    
        default:
            return value
    }
}

const OddsTable = ({ matchId }) => {

    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState(0)


	const toggleState = (e) => {
        setSelected(e.target.value)
        
        console.log(selected);
        setToggle(!toggle)
	}

    const matchObj = odds.find(obj => obj.eventId === matchId);
    


    const markets = groupedObjects(matchObj.markets)
    console.log(markets);



  return (
    <div className='oddstable'>
        <h4> All Markets </h4>
        {
        markets.map((a) => (
            <form className="switch-field" key={a.marketId}>
                <div className="switch-title">{ a.name }</div>
                    {
                        a.lists.map((b, i) => (
                            <div className="switchers" key={a.marketId + i + 1}>
                                {
                                    b.choices.map((c, i) => (

                                        <div className='switch' key={c.sourceId}>
                                            <div className='switch-header'>
                                                { reference(c.name) } { b.choiceGroup }
                                            </div>
                                            <div className="switch-item">
                                            <input
                                                type="radio"
                                                id={"switcher" + i}
                                                name={"switchToggle"}
                                                value={c.sourceId}
                                                onChange={toggleState}
                                                checked={parseInt(selected) === parseInt(c.sourceId)}
                                            />
                                            <label htmlFor="switcher">{ calculateOdds(c.fractionalValue) }</label>
                                            </div>
                                        </div>
                                    

                                    ))
                                }

                            </div>
                        ))
                    }
            </form>
        ))
    }
    </div>
  )
}

export default OddsTable


