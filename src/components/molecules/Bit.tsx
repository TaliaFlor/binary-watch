import {StyleSheet, View} from "react-native";
import React from "react";
import {Light} from "../atoms/Light";
import {BinaryNumber} from "../atoms/BinaryNumber";

export type BitProps = {
    on: boolean;
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        rowGap: "0.5em",
    },
});


export const Bit = (props: BitProps) => {
    return (
        <View style={styles.container}>
            <Light on={props.on}/>
            <BinaryNumber on={props.on}/>
        </View>
    );
};
