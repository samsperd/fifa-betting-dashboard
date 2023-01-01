import { createSlice } from '@reduxjs/toolkit'
import data from '../../database/data'


export const betslipSlice = createSlice({
    name: 'betslip',
    initialState: {
        bets : [],
        totalAmount: 0,
        stake: 100,
        totalOdds: 0
    },

    reducers: {
        addBet: (state, action) => {


            const { checked, value } = action.payload.target
            const parseValue = JSON.parse(value)
            const match = data.find(obj => obj.id === parseValue.eventId)
            parseValue["matchName"] = `${match?.homeTeam?.name} vs ${match?.awayTeam?.name}`
            const checking = state.bets.reduce((checker, obj) => checker || obj.eventId === parseValue.eventId, false);
            
            if (checked) {
                
                if (checking) {
                    const filteredbets = state.bets.filter((bet) => bet.eventId !== parseValue.eventId)

                    state.bets = [...filteredbets, parseValue]
                }
                else {
                    state.bets = [...state.bets, parseValue]

                }
            } else {
                state.bets = state.bets.filter((bet) => bet.eventId !== parseValue.eventId)
            }

            state.totalOdds = parseFloat(Number(state.bets.reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue.choiceOdd), 1)).toFixed(2));

            state.totalAmount = parseFloat(Number(state.totalOdds * state.stake).toFixed(2))            

        },
    
        removeBet: (state, action) => {

            state.bets = state.bets.filter((bet) => bet.eventId !== action.payload)
            state.totalOdds = parseFloat(Number(state.bets.reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue.choiceOdd), 1)).toFixed(2));

            state.totalAmount = parseFloat(Number(state.totalOdds * state.stake).toFixed(2))            


        },

        updateStake: (state, action) => {
            state.stake = Number(action.payload)
            state.totalAmount = parseFloat(Number(state.totalOdds * state.stake).toFixed(2))
        }



    }

})


export const { addBet, removeBet, updateStake } = betslipSlice.actions