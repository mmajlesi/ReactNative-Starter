import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyleParent}>
            <View style={styles.viewStyleOne} />
            <View style={styles.viewStyleTwo} />
            <View style={styles.viewStyleThree} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyleParent: {
        borderColor: 'black',
        borderWidth: 1,
        height: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewStyleOne: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },
    viewStyleTwo: {
        backgroundColor: 'green',
        alignSelf: 'center',
        height: 100,
        width: 100,
    },
    viewStyleThree: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
    }

});

export default BoxScreen;