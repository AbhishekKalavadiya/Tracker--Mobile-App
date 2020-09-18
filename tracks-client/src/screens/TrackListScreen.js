import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

function TrackListScreen({ navigation }) {
    return (
        <View>
            <Text>TrackListScreen</Text>
            <Button title=" go to track details" onPress={() => navigation.navigate("TrackDetail")} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default TrackListScreen
