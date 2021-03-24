import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text>Enter Name :</Text>
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>{`My name is ${name}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'black',
        borderWidth: 1.0,
        margin: 15,
        padding: 8,
    }
});

export default TextScreen;