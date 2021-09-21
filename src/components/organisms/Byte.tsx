import React from "react";
import {StyleSheet, View} from "react-native";
import {Bit} from "../molecules/Bit";

export type ByteProps = {
    value: number;
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        columnGap: "1em",
    },
});

export const Byte = (props: ByteProps) => {
    const binaryArray = convertTo8DigitBinaryNumber(props.value);

    return (
        <View style={styles.container}>
            {binaryArray.map(bit => <Bit on={bit}/>)}
        </View>
    );
};


function convertTo8DigitBinaryNumber(value: number): Array<boolean> {
    let binaryArray = [false, false, false, false, false, false, false, false];

    if (!value || value < 0 || value > 255) {
        return binaryArray;
    }

    const binaryNumber = value.toString(2);

    let arrayCount = 7;
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        const bit = binaryNumber.charAt(i);

        binaryArray[arrayCount] = bit === "1";

        arrayCount--;
    }

    return binaryArray;
}
