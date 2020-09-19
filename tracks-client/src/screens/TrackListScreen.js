import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Card} from 'react-native-elements'
import { useStateView } from '../context/StateProvider'
import trackerAPI from '../api/trackerAPI' 
import { NavigationEvents, SafeAreaView  } from 'react-navigation'

function TrackListScreen({ navigation }) {

    const [ { trackedLocations } , dispatch] = useStateView()
    const fetchTracks = async () => {
        const response = await trackerAPI.get('/tracks')
        dispatch ({
            type: 'FETCHED_TRACKS',
            payload: response.data
        }) 
    }

    return (
        <SafeAreaView forceInset={{ top: 'always'}} >
            <NavigationEvents onWillFocus={fetchTracks} />
     
            {
                trackedLocations && <FlatList 
                data={trackedLocations}
                keyExtractor={item => item._id}
                renderItem ={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})} > 
                            <Card>
                                <Card.Title >
                                    {item.name}
                                </Card.Title>         
                            </Card> 
                    </TouchableOpacity>)
                }}
            />
            }
          
        </SafeAreaView>   
    )
}

TrackListScreen.navigationOptions = {
    title: 'Track List'
}

const styles = StyleSheet.create({
    
})

export default TrackListScreen
