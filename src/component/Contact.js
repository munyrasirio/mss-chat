import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Image, Text, View } from 'react-native';
import Hr from './Hr';


export default class Contact extends Component {
  	render() {
		return (
			<TouchableHighlight style={styles.contact} underlayColor="#E8E8E8" onPress={this.props.onPress}>
				<View style={{flex: 1}}>
					<View style={styles.contactLine}>
						<View style={styles.photoBox}>
		                	<Image style={styles.photo} source={this.props.source}/>
		                </View>
		               	<Text style={styles.name}>{this.props.name}</Text>
		            </View>
		            <Hr/>
		        </View>
            </TouchableHighlight>
		);
  	}
}

const styles = StyleSheet.create({
	contact: {
		height: 70,
		backgroundColor: 'white',
		paddingLeft: 15, 
		paddingTop: 5
	},

	contactLine: {
		flex: 1, 
		paddingLeft: 15,
		flexDirection: 'row', 
		alignItems: 'center'
	},

	photoBox: {
		width: 60,
		height: 60,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderRadius: 50
	},

	photo: {
		flex:1,
		width: null,
		height: null,
		borderRadius: 50,
		resizeMode: 'stretch'
	},

	name: {
		flex: 1,
		paddingLeft: 5,
		fontSize: 20
	}
})

Contact.defaulProps = {
	source: null,
	name: null,
	onPress: null
}

Contact.propTypes = {
	source: React.PropTypes.func.isRequired,
	name: React.PropTypes.string.isRequired,
	onPress: React.PropTypes.func.isRequired
}