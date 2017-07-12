import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StatusBar } from 'react-native';

import Contacts from './src/page/Contacts';
import Chat from './src/page/Chat';

const ROUTES = StackNavigator({
	contacts: {
		screen: Contacts
	},
	chat: {
		screen: Chat
	}
}, {
	headerMode: 'none'
})

export default class App extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{height: StatusBar.currentHeight, backgroundColor: 'black'}}/>
				<ROUTES/>
			</View>
		)
	}
}


/*this.props.navigation.state.params.contact*/