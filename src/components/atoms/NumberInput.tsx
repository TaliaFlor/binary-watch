import {StyleSheet, TextInput} from "react-native";
import React from "react";
import {colors} from "../../shared/Colors";

export type NumberInputProps = {
    number: number;
    onChangeNumber: (text: string) => void;
}

const styles = StyleSheet.create({
    input: {
        height: '3em',
        width: '20em',
        margin: '1em',
        borderWidth: 1,
        padding: '1em',
        borderRadius: '0.5em',
    },
});

export const NumberInput = (props: NumberInputProps) => {
    // @ts-ignore
    return (
        <TextInput
            style={styles.input}
            value={props.number}
            onChangeText={input => props.onChangeNumber(normalizeInput(input))}
            keyboardType="numeric"
            placeholder="Entre um valor"
            maxLength={3}
        />
    );
};

function normalizeInput(input: string): number {
    let number = Number(input.replace(/[^0-9]/g, ''));
    if (number > 255) {
        number = 255;
    }
    return number;
}

