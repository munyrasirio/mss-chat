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
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
		marginLeft: 10,
		marginRight: 5,
		marginTop: 10,
		borderWidth: 1,
		borderRadius: 50,
		borderColor: 'lightgray'
	},

	buttonImg: {
		flex: 1,
		resizeMode: 'contain',
		borderRadius: 50
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