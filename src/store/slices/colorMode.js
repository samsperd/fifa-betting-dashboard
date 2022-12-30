import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: 'light'
}

const colorModeSlice = createSlice({
    name: 'colorMode',
    initialState,
    reducers: {
        lightMode(state) {
            if (state.mode !== 'light') {
                state.mode = 'light'
            }
        },

        darkMode (state) {
            if (state.mode !== 'dark') {
                state.mode = 'dark'
            }
        }
    }
})

export default colorModeSlice

export const { lightMode, darkMode } = colorModeSlice.actions