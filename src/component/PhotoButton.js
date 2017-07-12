import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class PhotoButton extends Component {
  	render() {
		return (
			<TouchableOpacity style={styles.buttonPhoto} onPress={this.props.onPress}>
                <Image style={styles.buttonImg} source={this.props.source}/>
            </TouchableOpacity>
		);
  	}
}

const styles = StyleSheet.create({
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
	}
})

PhotoButton.defaulProps = {
	source: null,
	onPress: null
}

PhotoButton.propTypes = {
	source: React.PropTypes.func.isRequired,
	onPress: React.PropTypes.func.isRequired
}