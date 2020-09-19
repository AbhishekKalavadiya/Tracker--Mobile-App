import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useStateView } from '../context/StateProvider'
import { SafeAreaView  } from 'react-navigation'
import MapView, {Polyline} from 'react-native-maps'

function TrackDetailScreen({navigation}) {

    const [{ trackedLocations }, dispatch] = useStateView()
    const _id = navigation.getParam('_id')

    const trackFind = trackedLocations.find(t => t._id === _id)
    const initalCoords = trackFind.locations[0].coords
    return (
        <SafeAreaView forceInset={{ top: 'always'}} >
            <Text style={{fontSize: 48}}>{trackFind.name}</Text>

            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initalCoords
                }}
            >
                <Polyline 
                    coordinates={trackFind.locations.map(loc => loc.coords) } 
                />
            </MapView>
        </SafeAreaView>
    )
}

TrackDetailScreen.navigationOptions = {
    title: "Track Details"
}

const styles = StyleSheet.create({
    mapStyle :{
        height: 300
    }
})

export default TrackDetailScreen
