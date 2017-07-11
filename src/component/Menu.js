import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Menu extends Component {
  	render() {
		return (
			<View style={styles.menu}>
				{this.props.children}
			</View>
		);
  	}
}

const styles = StyleSheet.create({
	menu: {
		height: 50,
		flexDirection: 'row',
		backgroundColor: '#1a237e',
		justifyContent: 'center'
	}
})