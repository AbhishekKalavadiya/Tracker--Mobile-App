import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useStateView } from '../context/StateProvider'
import { navigate } from '../navigationRef'

const CheckAuthScreen = () => {

    const [state, dispatch] = useStateView()

    const IsLoggedIn = async() => {
        const token = await AsyncStorage.getItem('token')
        if(token){
            dispatch({ 
                type: 'SIGN_IN',
                payload: {
                    isSignedIn: true,
                    token: token
                }
            })
            navigate('TrackList')
        }else{
            navigate('Signup')
        }    
    }

    useEffect(() => {
       IsLoggedIn() 
    }, [])
    
    return null;
}

export default CheckAuthScreen