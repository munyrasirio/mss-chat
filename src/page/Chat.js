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
			input: ''
		}
	}

	componentWillMount() {
		let contact = this.props.navigation.state.params;
		this.setState({name: contact.name, source: contact.source, chat: contact.chat});
	}

	back() {
		this.props.navigation.goBack()
	}

	submit() {
		if (this.state.input !== '') {
			let newChat = Object.assign([], this.state.chat);

			newChat.push({sender: this.state.input});
			this.setState({input: '', chat: newChat});
		}
	}

  	render() {
  		
		return (
            <View style={styles.page}>
                <Menu>
                	<PhotoBack source={this.state.source} onPress={this.back.bind(this)}/>
                    <Name name={this.state.name}/>
                    <MenuItem name='attachment' onPress={this.back.bind(this)}/>
                    <MenuItem name='dots-three-horizontal' onPress={this.back.bind(this)}/>
                </Menu>

                <View style={styles.chatbox}>
                	<Image source={background} style={styles.backgroundImage}>
	                	<FlatList
						  data={this.state.chat}
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
					    	onSubmitEditing={this.submit.bind(this)}
					    	onChangeText={(text) => this.setState({input: text})}
					    	value={this.state.input}
					    />
                    </View>
					<TouchableOpacity style={styles.buttonBox} onPress={this.submit.bind(this)}>
        				<Icon style={styles.button} name='paper-plane'/>
            		</TouchableOpacity>
                </View>
            </View>
		);
  	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1
	},

	chatbox: {
		flex: 9,
	},

	backgroundImage: {
		flex: 9,
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
		flex: 1,
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
		flex: 1,
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
