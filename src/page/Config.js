import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Menu, Name, MenuItem, PhotoButton } from '../component';
import Icon from 'react-native-vector-icons/Entypo';

import avatar1 from '../img/avatar1.jpg';

export default class Contacts extends Component {
	/*proximo() {
		this.props.navigation.navigate('chat', {contact: 'Friend'})
	}*/

	back() {
		this.props.navigation.goBack()
	}

  	render() {
		return (
			<View style={styles.page}>
				<View style={{height: 80, flexDirection: 'row'}}>
	                <PhotoButton source={avatar1} onPress={this.back.bind(this)}/>
	                <View style={styles.name}>
						<Text style={styles.text}>MSS Chat</Text>
					</View>
	            	<TouchableOpacity style={styles.buttonBox} onPress={this.back.bind(this)}>
		        		<Icon style={styles.button} name='cross'/>
		            </TouchableOpacity>
	            </View>
	            <View style={{flex: 1}}>
	            </View>
			</View>
		);
  	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1
	},

	name: {
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		color: 'gray',
		fontSize: 20
	},

	buttonBox: {
		width: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		color: 'gray',
		fontSize: 25
	}
});