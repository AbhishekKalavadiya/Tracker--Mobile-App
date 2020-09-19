import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import { useStateView } from '../context/StateProvider'
import { navigate } from '../navigationRef'
import { SafeAreaView } from 'react-navigation'
import { FontAwesome } from "@expo/vector-icons"

function AccountScreen() {

    const [{auth}, dispatch] = useStateView()

    const signout = async() => {
        await AsyncStorage.removeItem('token')
        dispatch({
            type: 'SIGN_OUT'
        })

        navigate('loginFlow')
    }

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={styles.textStyle}>Account Screen </Text>
            <Button 
                title="Sign Out" 
                style={styles.buttonStyle} 
                onPress={() => signout()} 
            /> 
            
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions ={
    title: "Account",
    tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({
    textStyle: {
        marginLeft: 10,
        textAlign: "left",
        fontSize: 30,
        marginBottom: 30
    },
    viewStyle: {
        flex: .4,
        justifyContent: "center",
        marginBottom: 100
    },
    buttonStyle: {
        marginHorizontal: 25,
        marginBottom: 20,
        height: '50px'
    }
})

export default AccountScreen
