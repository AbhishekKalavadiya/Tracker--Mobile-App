import React from 'react'
import 'react-native-gesture-handler'
import { 
	createAppContainer,  
	createSwitchNavigator 
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AccountScreen from './src/screens/AccountScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import reducer, {initialState} from './src/context/reducer'
import { StateProvider } from './src/context/StateProvider'
import { setNavigator } from './src/navigationRef'
import  CheckAuthScreen  from './src/screens/CheckAuthScreen'
import { FontAwesome } from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
	TrackList: TrackListScreen,
	TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = {
	title: 'Track Lists',
	tabBarIcon: <FontAwesome name="th-list" size={20} />
}

const switchNavigator = createSwitchNavigator({
	CheckAuth: CheckAuthScreen,
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: trackListFlow, 
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen
	})
})

const App = createAppContainer(switchNavigator)

export default () => {
	return (
		<StateProvider reducer={reducer} initialState={initialState}>
			<App ref={(navigator)=> { setNavigator(navigator)}} />
		</StateProvider>
	)
}