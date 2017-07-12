import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class PhotoBack extends Component {
  	render() {
		return (
			<TouchableOpacity style={styles.back} onPress={this.props.onPress}>
			    <View style={styles.buttonBox}>
        			<Icon style={styles.button} name='chevron-left'/>
        		</View>
        		<View style={styles.photo}>
                	<Image style={styles.img} source={this.props.source}/>
                </View>
            </TouchableOpacity>
		);
  	}
}

const styles = StyleSheet.create({
	back: {
		width: 90,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
		
	},

	buttonBox: {
		width: 25,
	},

	button: {
		color: 'white',
		fontSize: 20
	},

	photo: {
		width: 45,
		height: 45,
		borderWidth: 1,
		borderRadius: 50,
		borderColor: 'lightgray'
	},

	img: {
		flex:1,
		width: null,
		height: null,
		borderRadius: 50,
		resizeMode: 'stretch'
	}
})

PhotoBack.defaulProps = {
	source: null,
	onPress: null
}

PhotoBack.propTypes = {
	source: React.PropTypes.string.isRequired,
	onPress: React.PropTypes.func.isRequired
}