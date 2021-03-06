import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'
import Colors from './../config/colors'

export default class NewAccountName extends Component {

    render() {
        return (
            <TouchableHighlight style={{flex:1}}
                                underlayColor={Colors.darkergray}
                                onPress={()=>{this.props.getSelectedCurrencies(this.props.getAccountList)}}>
                <View style={styles.row}>
                    <View style={[styles.options, {backgroundColor: Colors.darkergray}]}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                            {this.props.getAccountList.name.substr(0, 2).toUpperCase()}
                        </Text>
                    </View>
                    <View style={{paddingLeft: 20, justifyContent: 'center'}}>
                        <Text style={{color: Colors.black, fontSize: 18}}>
                            {this.props.getAccountList.name}
                        </Text>
                        <Text style={{color: Colors.darkestgray, fontSize: 14}}>
                            {this.props.getAccountList.reference}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderBottomColor: Colors.lightgray
    },
    options: {
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
