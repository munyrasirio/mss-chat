import React, { Component } from 'react';
import { StyleSheet, Text, View,
		TouchableOpacity, Image,
		StatusBar, FlatList,
		TextInput }
from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import avatar from '../img/avatar1.jpg';
import background from '../img/background.jpg';

export default class Chat extends Component {
	constructor() {
		super();
		this.state = {
			data: 	[{sender: 'Olar'}, {receiver: 'Olar'}, {sender: 'Tar bein?//'},
					{receiver: 'Tor!1'}, {sender: 'Entaum tar.'}, {sender: 'Vou ali fritar uns beico, depois levo pra você. vlw flw.'},
					{receiver: 'Eu gosto de beico, manda o kg..'}, {sender: 'Só metade, pode ser?'}, {receiver: 'Pode, né.'},
					{sender: 'Tchêau.'}, {receiver: 'Fica, tem bolo'}, {sender: 'Midira, tem nada.'},
					{sender: 'vlw, flw.'}],
			input: ''
		}
	}
  	render() {
		return (
            <View style={styles.page}>
            	<View style={{height: StatusBar.currentHeight, backgroundColor: 'black'}}/>
                <View style={styles.menu}>
                	<TouchableOpacity style={styles.buttonBack}>
                		<Icon style={styles.button} name='headset'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPhoto}>
                        <Image style={styles.buttonImg} source={avatar}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonName}>
                        <Text style={styles.button}>Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMedia}>
                		<Icon style={styles.button} name='headset'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                		<Icon style={styles.button} name='headset'/>
                    </TouchableOpacity>
                </View>

                <View style={styles.chatbox}>
                	<Image source={background} style={styles.backgroundImage}>
	                	<FlatList
						  data={this.state.data}
						  renderItem={({item, index}) => {
								  	if(item.sender) {
								  		return (
	                    					<View key={index} style={styles.sender}>
	                    						<Text style={styles.balloon}>{item.sender}</Text>
	                    					</View>
	                    				)
								  	} else {
								  		return (
		                    				<View key={index} style={styles.receiver}>
		                    					<Text style={styles.balloon}>{item.receiver}</Text>
		                    				</View>
		                    			)
								  	}
								}
							}
						/>
					</Image>
                </View>

                <View style={styles.textBox}>
					<TouchableOpacity style={styles.buttonEmo}>
                		<Icon style={styles.button} name='headset'/>
                    </TouchableOpacity>
                    <View style={styles.textInput}>
                    	<TextInput
					    	style={{borderColor: 'gray', borderWidth: 1}}
					    	onChangeText={(text) => this.setState({input: text})}
					    	value={this.state.input}
					    />
                    </View>
					<TouchableOpacity style={styles.buttonSend}>
                		<Icon style={styles.button} name='headset'/>
                    </TouchableOpacity>
                </View>
            </View>
		);
  	}
}

const styles = StyleSheet.create({
	page: {
		flex: 100
	},

	menu: {
		height: 50,
		flexDirection: 'row',
		backgroundColor: '#1a237e',
		justifyContent: 'center'
	},

	button: {
		color: 'white',
		fontSize: 20
	},

	chatbox: {
		flex: 90,
	},

	backgroundImage: {
		flex: 90,
		height: null,
		width: null,
	},

	textBox: {
		height: 50,
		flexDirection: 'row',
		backgroundColor: 'white'
	},


	/*MENU VIEW*/
	buttonBack: {
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'green'
	},

	buttonPhoto: {
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 2
	},

	buttonImg: {
		flex: 1,
		resizeMode: 'contain',
		borderRadius: 150
	},
	
	buttonName: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 5,
		backgroundColor: 'red'
	},

	buttonMedia: {
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'darksalmon'
	},

	buttonMenu: {
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'darkred'
	},


	/*BALLOON VIEW*/
	sender: {
		flex: 10,
		maxHeight: 100,
		justifyContent: 'center',
		alignItems: 'flex-end'
	},

	balloon: {
		padding: 5,
		margin: 5,
		maxHeight: 300,
		maxWidth: 250,
		fontSize: 15,
		backgroundColor: 'honeydew'
	},

	receiver: {
		flex: 10,
		maxHeight: 100,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},


	/*INPUT VIEW*/
	buttonEmo: {
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blueviolet'
	},

	buttonSend: {
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'chocolate'
	},

	textInput: {
		flex: 1,
	}
});
