import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Menu, Name, MenuItem, Contact } from '../component';

import logo from '../img/icon.png';
import avatar2 from '../img/avatar2.jpg';
import avatar1 from '../img/avatar1.jpg';


export default class Contacts extends Component {
	/*proximo() {
		this.props.navigation.navigate('chat', {contact: 'Thiago'})
	}*/

	config() {
		this.props.navigation.navigate('config')
	}

	contact(item) {
		this.props.navigation.navigate('chat', item)
	}

  	render() {
  		let data = []
  		for (var i = 0; i < 10; i++) {
  			data.push({name: 'Guy', source: avatar2, chat: []});
  			data.push({name: 'Girl', source: avatar1, chat: []});
  		}

		return (
			<View style={styles.page}>
				<Menu>
					<View style={styles.logo}>
                    	<Image style={styles.img} source={logo}/>
                    </View>
                    <Name name='MSS Chat'/>
                	<MenuItem name='magnifying-glass' onPress={() => {}}/>
                	<MenuItem name='cog' onPress={this.config.bind(this)}/>
                </Menu>

                <View style={styles.contactList}>
                	<FlatList
						data={data}
						renderItem={({item, index}) => {
							return <Contact
								key={index}
								source={item.source}
								name={item.name}
								date='23:00'
								lastMessage='Lorem ipsum dolor sit amet.'
								onPress={() => {this.contact(item)}}
							/>
		                }}
					/>
                </View>
			</View>
		);
  	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1
	},

	contactList: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column'
	},

	//LOGO//
	logo: {
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 2
	},

	img: {
		flex: 1,
		resizeMode: 'contain',
		borderRadius: 150
	}
});