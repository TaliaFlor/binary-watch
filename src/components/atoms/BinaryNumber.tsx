import {BitProps} from "../molecules/Bit";
import {StyleSheet, Text, TextStyle} from "react-native";
import React from "react";
import {colors} from "../../shared/Colors";

type Style = {
    base: TextStyle;
    on: TextStyle;
    off: TextStyle;
};

// @ts-ignore
const styles = StyleSheet.create<Style>({
    base: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "1.5em",
    },
    on: {
        color: colors.primary,
    },
    off: {
        color: colors.secondary,
    },
});


export const BinaryNumber = (props: BitProps) =>
    <Text style={[styles.base, (props.on ? styles.on : styles.off)]}>{props.on ? 1 : 0}</Text>;
