import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Name extends Component {
  	render() {
		return (
			<TouchableOpacity style={styles.buttonName}>
                <Text style={styles.button}>{this.props.name}</Text>
            </TouchableOpacity>
		);
  	}
}

const styles = StyleSheet.create({
	buttonName: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 5
	},

	button: {
		color: 'white',
		fontSize: 20
	}
})

Name.defaulProps = {
	name: null
}

Name.propTypes = {
	name: React.PropTypes.string.isRequired
}