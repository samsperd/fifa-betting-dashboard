import React from 'react'
import { useGetFootballMatchOddsQuery } from '../../services/footballApi'


function calculateOdds(data) {

    const fraction = data.split('/')
    return  ((parseFloat(fraction[0], [10]) / parseFloat(fraction[1], [10])) + 1).toFixed(2)
}

const OddsTable = () => {

    const { data, isFetching } = useGetFootballMatchOddsQuery()

    if (isFetching) {
        return "loading..."
    }

    console.log(data);
    const markets = data?.markets
  return (
    <div className='oddstable'>
        <ul>
            {
                markets.map((e) => (
                    <div key={e.id}>
                        <li>
                            { e.marketName } { e.choiceGroup }
                        </li>
                        {
                            e.choices.map((c) => (
                                <button>
                                    { c.name } - { calculateOdds(c.fractionalValue) }
                                </button>
                            ))
                        }
                    </div>
                ))
            }
        </ul>
    </div>
  )
}

export default OddsTable