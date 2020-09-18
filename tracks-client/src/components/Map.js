import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { useStateView } from '../context/StateProvider'
import MapView, { Polyline, Circle } from 'react-native-maps'

const Map = () => {

    const [{ locationProvider } , dispatch] = useStateView()
    const { currentLocation, locations } = locationProvider
    // const { latitude, longitude } = currentLocation.coords
    // console.log(currentLocation.coords)
    
    if( !locationProvider ){
        console.log('hi tehre')
        return <ActivityIndicator size='large' style={{ marginTop: 200}} />
    }

    return (
        <>
            
            <MapView
                style={styles.mapStyle}
                initialRegion={{ 
                    ...currentLocation?.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {
                    currentLocation.coords && 
                    <Circle 
                        center={currentLocation.coords}
                        radius={40}
                        strokeColor="rgba(158,158,255,1.0)"
                        fillColor="rgba(158,158,255,0.3)"
                    />
                }
                {   
                    locations && 
                    <Polyline
                        coordinates={locations.map(loc => loc.coords)}
                    />
                }
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        marginTop: 20,
        height: 300,
    }
})

export default Map
