import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [Counter, SetCounter] = useState(0);
    return (
        <View>
            <Button
                title="Increase"
                onPress={() => SetCounter(Counter + 1)}
            />
            <Button
                title="Decrease"
                onPress={() => SetCounter(Counter - 1)}
            />

            <Text>Current Count : {Counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;