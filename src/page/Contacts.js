import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Menu, Name, MenuItem, Contact, Hr } from '../component';

import logo from '../img/icon.png';
import avatar2 from '../img/avatar2.jpg';
import avatar1 from '../img/avatar1.jpg';


export default class Contacts extends Component {
	/*proximo() {
		this.props.navigation.navigate('chat', {contact: 'Thiago'})
	}*/

	back() {
		this.props.navigation.goBack()
	}

  	render() {


  		let data = []
  		for (var i = 0; i < 10; i++) {
  			data.push({name: 'My Friend', source: avatar2});
  			data.push({name: 'My Friend', source: avatar1});

  		}


		return (
			<View style={styles.page}>
				<Menu>
					<View style={styles.logo}>
                    	<Image style={styles.img} source={logo}/>
                    </View>
                    <Name name='MSS Chat'/>
                	<MenuItem name='magnifying-glass' onPress={this.back.bind(this)}/>
                	<MenuItem name='cog' onPress={this.back.bind(this)}/>
                </Menu>

                <View style={styles.contactList}>
                	<FlatList
						data={data}
						renderItem={({item, index}) => {
							return <Contact key={index} source={item.source} name={item.name} onPress={this.back.bind(this)}/>
		                }}
					/>
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
		flex: 1,
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