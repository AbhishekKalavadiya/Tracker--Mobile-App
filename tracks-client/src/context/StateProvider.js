import React, { useContext, createContext, useReducer } from 'react'


//data layer
export const StateContext = createContext()

//build povider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//to consume it in component
export const useStateView = () => useContext(StateContext)
