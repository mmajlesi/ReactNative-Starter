import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCount = ({ Color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{Color}</Text>
            <Button
                title={`Increase ${Color}`}
                onPress={() => onIncrease()}
            />
            <Button
                title={`Decrease ${Color}`}
                onPress={() => onDecrease()}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorCount;