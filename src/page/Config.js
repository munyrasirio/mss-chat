import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import { PhotoButton, Hr } from '../component';
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

  		let data = [
  			{title: 'Profile', icon: 'user'},
			{title: 'Privacity', icon: 'key'},
			{title: 'Notifications', icon: 'bell'},
			{title: 'Backup', icon: 'upload-to-cloud'},
			{title: 'Help', icon: 'help-with-circle'}
		];

		
		return (
			<View style={styles.page}>
				<View style={styles.top}>
	                <Image style={styles.img} source={avatar1}/>
	                <View style={styles.name}>
						<Text style={styles.text}>MSS Chat</Text>
					</View>
	            	<TouchableOpacity style={styles.buttonBox} onPress={this.back.bind(this)}>
		        		<Icon style={styles.button} name='cross'/>
		            </TouchableOpacity>
	            </View>
	            <View style={{flex: 1}}>
	            	<FlatList
	            		data={data}
						renderItem={({item, index}) => {
							return (
								<TouchableHighlight style={styles.buttonConfig} key={index} underlayColor="#E8E8E8" onPress={this.back.bind(this)}>
									<View style={{flex: 1, flexDirection: 'column'}}>
										<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
											<Icon style={styles.buttonList} name={item.icon}/>
											<Text style={styles.config}>{item.title}</Text>
										</View>
										<Hr/>
									</View>
								</TouchableHighlight>
							)
		                }}
		            />
	            </View>
			</View>
		);
  	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'white'
	},

	top: {
		height: 90,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: 'lightgray'


	},

	img: {
		width: 60,
		height: 60,
		marginLeft: 15,
		marginRight: 5,
		marginTop: 15,
		borderWidth: 1,
		borderRadius: 50,
		borderColor: 'lightgray'
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
	},


	//LIST//

	buttonConfig: {
		height: 60
	},

	buttonList: {
		width: 60,
		paddingLeft: 30,
		color: '#1a237e',
		fontSize: 25
	},

	config: {
		paddingLeft: 20,
		color: 'gray',
		fontSize: 18
	}
});