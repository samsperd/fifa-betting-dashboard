import { createSlice } from '@reduxjs/toolkit'


export const betslipSlice = createSlice({
    name: 'betslip',
    initialState: {
        totalItems: null,
        bets : [],
        totalamount: 0
    },

    reducers: {
        addBet: (state, action) => {

            const { checked, value } = action.payload.target
            const parseValue = JSON.parse(value)
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

            console.log('==============boker======================');
            console.log(state.bets);
            console.log('==============boker======================');
            

        },
    
        removeBet: (state, action) => {
            console.log(action.payload);

            state.bets.filter((bet) => bet.id !== action.payload)
        }



    }

})


export const { addBet, removeBet } = betslipSlice.actions