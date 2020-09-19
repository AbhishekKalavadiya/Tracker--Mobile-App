import { useStateView } from '../context/StateProvider'
import instance from '../api/trackerAPI'
import {navigate} from '../navigationRef'

export default () => {
    const [{ locationProvider }, dispatch] = useStateView()
    const  { locations, name } = locationProvider

    const reset = () => {
        dispatch({
            type: "RESET",
        })
    }

    const saveTrack = async () => {

        await instance.post('/tracks', {name, locations})
        reset()
        navigate('TrackList')
    }

    return [saveTrack]
}