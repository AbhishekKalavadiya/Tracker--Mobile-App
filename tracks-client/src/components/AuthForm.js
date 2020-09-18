import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

const AuthForm = ({ headerText, loadingMessage, onSubmit, submitButtonMessage }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Text h3 style={styles.textStyle}>{headerText}</Text>
            <View style={styles.inputStyle}>
                <Input 
                    label='Email'
                    value={email}
                    onChangeText={setEmail} 
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input 
                    secureTextEntry
                    label='Password'
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <Button 
                style={styles.buttonStyle} 
                title={submitButtonMessage}
                disabled = {loadingMessage}
                onPress={() => onSubmit({email, password})} 
            />
        </>
    )
}

const styles = StyleSheet.create({
    
    textStyle: {
        textAlign: "center"
    },
    inputStyle: {
        margin: 20
    },
    buttonStyle: {
        marginHorizontal: 25,
        marginBottom: 20
    },
})

export default AuthForm
