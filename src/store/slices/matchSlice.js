import { createSlice } from '@reduxjs/toolkit';
import data from '../../database/data';

// Declare an array of matchesIds
const matchesIds = data.map(match => match.id)


// Declare a slice to manage the current id in the state
const matchIdSlice = createSlice({
  name: 'matchId',
  initialState: {
    matchId: matchesIds[0],
    currentIndex: 0
  },
  reducers: {
    // Reducer to set the current id and current index
    setMatchId(state, action) {
      state.matchId = action.payload;
      state.currentIndex = matchesIds.indexOf(state.matchId);
    },
    // Reducer to handle the next button click
    next(state) {
      // Increment the current index
      state.currentIndex++;

      // If the current index is greater than the length of the array, set it back to 0 (to loop back to the beginning)
      if (state.currentIndex >= matchesIds.length) {
        state.currentIndex = 0;
      }

      // Set the new current id to the id at the current index
      state.matchId = matchesIds[state.currentIndex];
    },
    // Reducer to handle the previous button click
    prev(state) {
      // Decrement the current index
      state.currentIndex--;

      // If the current index is less than 0, set it to the last index in the array (to loop back to the end)
      if (state.currentIndex < 0) {
        state.currentIndex = matchesIds.length - 1;
      }

      // Set the new current id to the id at the current index
      state.matchId = matchesIds[state.currentIndex];
    }
  }
});

export default matchIdSlice;

// Extract the action creators from the slice
export const { setMatchId, next, prev } = matchIdSlice.actions;

// ...

