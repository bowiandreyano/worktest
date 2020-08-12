import React, {Component} from 'react'
import axios from 'axios'
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { BASE_URL } from '../config'

export default function Home({navigation}) {

    const { logout } = React.useContext(AuthContext);
    const state = React.useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text_add}>
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerlist: {
        marginLeft: 15,
        marginBottom: 5
    },
    loadingdata: {
        textAlign: 'center',
        fontSize: 20
    },
    wraplist: {
        maxHeight: 500
    }
})
