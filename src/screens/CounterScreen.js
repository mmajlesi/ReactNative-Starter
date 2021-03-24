import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === {counter : Number}
    // action === {type : increase || decrease}

    switch (action.type) {
        case 'increase':
            return { ...state, counter: state.counter + 1 };
        case 'decrease':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }

}

const CounterScreen = () => {
    const [state, dispach] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => dispach({ type: 'increase' })}
            />
            <Button
                title="Decrease"
                onPress={() => dispach({ type: 'decrease' })}
            />

            <Text>Current Count : {state.counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;