import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class MenuItem extends Component {
  	render() {
		return (
			<TouchableOpacity style={styles.buttonBox} onPress={this.props.onPress}>
        		<Icon style={styles.button} name={this.props.name}/>
            </TouchableOpacity>
		);
  	}
}

const styles = StyleSheet.create({
	buttonBox: {
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},

	button: {
		color: 'white',
		fontSize: 20
	}
})

MenuItem.defaulProps = {
	name: null,
	onPress: null
}

MenuItem.propTypes = {
	name: React.PropTypes.string.isRequired,
	onPress: React.PropTypes.func.isRequired
}