import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button
                title="Add Color"
                onPress={() => {
                    setColors([...colors, randomRgb()]);
                }}
            />
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
                }
                }
            />


        </View>);
}

const randomRgb = () => {
    const Red = Math.floor(Math.random() * 256);
    const Green = Math.floor(Math.random() * 256);
    const Blue = Math.floor(Math.random() * 256);

    return `rgb(${Red},${Green},${Blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;