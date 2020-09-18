import { useStateView } from '../context/StateProvider'
import trackerAPI from '../api/trackerAPI'

export default () => {
    const [{ locationProvider, trackedLocations  }, dispatch] = useStateView()
    const  { locations, name } = locationProvider

    const saveTrack = async () => {
        await trackerAPI.post('/tracks', {name, locations})
    }

    return [saveTrack]
}