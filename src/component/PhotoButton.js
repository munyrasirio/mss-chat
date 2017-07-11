import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class PhotoButton extends Component {
  	render() {
		return (
			<TouchableOpacity style={styles.buttonPhoto}>
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
	source: null
}

PhotoButton.propTypes = {
	source: React.PropTypes.string.isRequired
}