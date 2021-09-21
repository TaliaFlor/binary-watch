import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Byte} from "../organisms/Byte";
import {NumberInput} from "../atoms/NumberInput";

const styles = StyleSheet.create({
    container: {
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "2em",
    },
});

export const BinaryWatch = () => {
    const [number, onChangeNumber] = useState<number>();

    return (
        <View style={styles.container}>
            <Byte value={number}/>
            <NumberInput number={number} onChangeNumber={onChangeNumber}/>
        </View>
    );
};
