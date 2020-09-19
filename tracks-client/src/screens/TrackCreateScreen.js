import React from 'react'
import useLocation from '../hooks/useLocation'
import { StyleSheet } from 'react-native'
import {SafeAreaView , withNavigationFocus} from 'react-navigation'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from "@expo/vector-icons"

function TrackCreateScreen({ isFocused }) {

    const [err] = useLocation(isFocused)

    return (
        <SafeAreaView forceInset={{ top: 'always'}} >
            <Map />
            {
                err ?<Text>Please allow the location permissions</Text> :null
            }
            <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20}/>
}

const styles = StyleSheet.create({
    
})

export default withNavigationFocus(TrackCreateScreen)
