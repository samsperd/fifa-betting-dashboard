import React, { useState } from 'react'
import { useGetFootballMatchOddsQuery } from '../../services/footballApi'
import "./oddstable.scss"
import prod from './prod'



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

const OddsTable = () => {

    const { data, isFetching, isError } = useGetFootballMatchOddsQuery()
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState(0)


	const toggleState = (e) => {
        setSelected(e.target.value)
        
        console.log(selected);
        setToggle(!toggle)
	}
    
    
    if (isFetching ) {
        return "loading..."
    }



    // const markets =  groupedObjects(data?.markets)
    const markets = groupedObjects(prod)
    console.log(prod);
    console.log(markets);



  return (
    <div className='oddstable'>
        <h5> All Markets </h5>
        {
        markets.map((a) => (
            <>
                <hr />
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
            </>
        ))
    }
    </div>
  )
}

export default OddsTable


