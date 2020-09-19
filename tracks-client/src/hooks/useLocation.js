import {useState, useEffect, useCallback} from 'react'
import {  requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
// import '../_mockLocation'
import { useStateView } from '../context/StateProvider'

export default (shouldTrack) => {

    const [err, setErr] = useState(null)
    const [{ locationProvider }, dispatch] = useStateView()
    const { recording } = locationProvider

    
    const addLocation = useCallback((location) => {
            dispatch({
                type: 'ADD_CURRENT_LOCATION',
                payload: {
                    location: location
                }
            })
            
            if (recording) {
                dispatch({
                    type: 'ADD_LOCATION',
                    payload: location
                })
            }
    }, [recording])


    useEffect(() => {

        let subscriber
        const startTracking = async () => {
            try {
                await requestPermissionsAsync()
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => {
                    addLocation(location)
                })
            } catch (error) {
                setErr(error)
            }
        }

        if(shouldTrack || recording){
            startTracking()
        }else {
            if(subscriber){
                subscriber.remove()
            }
            subscriber = null
        }

        return () => {
            if(subscriber){
                subscriber.remove()
            }
        }
    }, [shouldTrack || recording, addLocation])

    return [err]
}
