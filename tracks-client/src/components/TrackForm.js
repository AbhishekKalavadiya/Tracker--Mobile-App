import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet,Button, View } from 'react-native'
import { useStateView } from '../context/StateProvider'
import useSaveTrack from '../hooks/useSaveTrack'

function TrackForm() {

    const [saveTrack] = useSaveTrack() 
    const [{ locationProvider }, dispatch] = useStateView()
    const { name, recording, locations } = locationProvider

    const startRecording  = () => {
        dispatch({
            type: "START_RECORDING"
        })
    }

    const stopRecording = () => {
        dispatch({
            type: "STOP_RECORDING"
        })
    }

    const changeName = (name) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: name
        })
    }



    return (
        <>
            <Input 
                value={name}
                onChangeText={changeName}
                style={styles.inputStyle} 
                placeholder='Name the Track' 
            />
            <View style={styles.buttonStyle}>
                {
                    recording ? <Button title='Stop ' onPress={stopRecording}/>
                        :<Button onPress={startRecording} title='Start Recording'/>
                }
            </View>
            
             <View style={styles.buttonStyle}>
                {
                    !recording && locations.length ? (
                        <Button  
                            onPress={saveTrack}
                            style={styles.buttonStyle}
                            title='Save'
                        />
                    ) : (null)
                }  
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputStyle: { 
        margin: 15
    },
    buttonStyle: {
        margin: 20
    }
})

export default TrackForm
