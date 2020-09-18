import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native' 
import { Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, textForLinkChange, routeName }) => {
    return (
        <>
            <TouchableOpacity onPress={() => {navigation.navigate(routeName)} }>
                <Text style={styles.linkStyle}>
                    {textForLinkChange}
                </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    linkStyle: {
        color: 'blue', 
        fontSize: 20,
        marginHorizontal: 'auto',  
        marginVertical: 50
    }
})

export default withNavigation(NavLink)
