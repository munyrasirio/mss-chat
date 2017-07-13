import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

export default class Hr extends Component {
  	render() {
		return (
			<View style=
                {{  height: 1,
                    marginLeft: 80,
                    marginRight: 30,
                    paddingBottom: 5,
                    borderColor: 'lightgray',
                    borderBottomWidth: 1,
                    backgroundColor: 'transparent'
                }}
            />
		);
  	}
}