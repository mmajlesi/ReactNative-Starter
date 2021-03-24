import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [passwordValid, validationPassword] = useState(false);
    return (
        <View>
            <Text>Enter Password :</Text>
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue) => validationPassword(newValue.length > 5)}
            />
            {passwordValid ? null : <Text>Password must be longer than 5 characters.</Text>}
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