export const initialState = {
    auth: {
        isSignedIn: false,
        token: null
    },
    locationProvider: {
        locations: [],
        recording: false,
        currentLocation: {},
        name: ''
    },
    trackedLocations: []
}
 
const reducer = (state, action) => {

    switch(action.type){
        case 'SIGN_IN': 
            return { 
                ...state,
                auth: { 
                    isSignedIn: action.payload.isSignedIn, 
                    token: action.payload.token
                } 
            }
        case 'SIGN_OUT':
            return {
                ...state,
                auth: {
                    isSignedIn: false,
                    token: null
                }
            }
        case 'ADD_CURRENT_LOCATION':
            return{
                ...state,
                locationProvider: {
                    ...state.locationProvider,
                    currentLocation: action.payload.location
                }
            }
        case 'START_RECORDING': 
            return {
                ...state,
                locationProvider: {
                    ...state.locationProvider,
                    recording: true,
                } 
            }
        case 'STOP_RECORDING': 
            return {
                ...state,
                locationProvider: {
                    ...state.locationProvider,
                    recording: false,
                } 
            }
        case "ADD_LOCATION":
            return{
                ...state,
                locationProvider: {
                    ...state.locationProvider,
                    locations: [...state.locationProvider.locations, action.payload]
                }
            }
        case 'CHANGE_NAME':
            return {
                ...state,
                locationProvider:{
                    ...state.locationProvider,
                    name: action.payload
                }
            }
        default :
            return state
    }
}

export default reducer