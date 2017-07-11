import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Menu, PhotoButton, Name, MenuItem } from '../component';

import logo from '../img/icon.png';


export default class Contacts extends Component {
	/*proximo() {
		this.props.navigation.navigate('chat', {contact: 'Thiago'})
	}*/

  	render() {
		return (
			<View style={styles.page}>
				<Menu>
                    <PhotoButton source={logo}/>
                    <Name name='My name'/>
                	<MenuItem name='headset' onPress={this.back.bind(this)}/>
                </Menu>

                <View style={styles.contactList}>
                	<Text>Oi</Text>
                </View>
			</View>
		);
  	}
}

const styles = StyleSheet.create({
	page: {
		flex: 100
	},

	contactList: {
		flex: 90,
	},
});