import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'
import Colors from './../config/colors'

export default class AccountCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0
        }
    }

    render() {
        return (
            <View style={ styles.row}>
                <TouchableHighlight
                    underlayColor={this.props.active ? Colors.gold : Colors.darkergray}
                    onPress={() => {
                        this.props.getSelectedCurrencies(this.props.getAccountList)
                    }}
                    style={[styles.options, {backgroundColor: this.props.active ? Colors.gold : Colors.darkergray}]}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>
                        {this.props.getAccountList.name.substr(0, 2).toUpperCase()}
                    </Text>
                </TouchableHighlight>
                <Text style={{color: Colors.darkestgray, paddingVertical: 10}}>
                    {this.props.getAccountList.name}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        width: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    options: {
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
