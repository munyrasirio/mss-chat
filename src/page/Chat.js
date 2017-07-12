import React, { Component } from 'react';
import { StyleSheet, Text, View,
		 Image, FlatList, TextInput,
		 TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Menu, PhotoBack, Name, MenuItem } from '../component';

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

	back() {
		this.props.navigation.goBack()
	}

  	render() {
		return (
            <View style={styles.page}>
                <Menu>
                	<PhotoBack source={avatar}/>
                    <Name name="Friend's name"/>
                    <MenuItem name='attachment' onPress={this.back.bind(this)}/>
                    <MenuItem name='dots-three-horizontal' onPress={this.back.bind(this)}/>
                </Menu>

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
					<TouchableOpacity style={styles.buttonBox} onPress={this.props.onPress}>
        				<Icon style={styles.button} name='emoji-happy'/>
            		</TouchableOpacity>
            		<View style={styles.textInput}>
                    	<TextInput
					    	style={{paddingLeft: 10, paddingBottom: 3, fontSize: 20}}
					    	placeholder='Type here...'
					    	onChangeText={(text) => this.setState({input: text})}
					    	value={this.state.input}
					    />
                    </View>
					<TouchableOpacity style={styles.buttonBox} onPress={this.props.onPress}>
        				<Icon style={styles.button} name='paper-plane'/>
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
	buttonBox: {
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},

	button: {
		color: 'gray',
		fontSize: 20
	},

	textInput: {
		flex: 1,
		justifyContent: 'flex-end'
	}
});
