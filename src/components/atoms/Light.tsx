import {StyleSheet, View, ViewStyle} from "react-native";
import React from "react";
import {BitProps} from "../molecules/Bit";
import {colors} from "../../shared/Colors";

type Style = {
    base: ViewStyle;
    on: ViewStyle;
    off: ViewStyle;
};

const styles = StyleSheet.create<Style>({
    base: {
        borderRadius: 50,
        height: "3em",
        width: "3em",
    },
    on: {
        backgroundColor: colors.primary
    },
    off: {
        backgroundColor: colors.secondary
    },
});


export const Light = (props: BitProps) => <View style={[styles.base, (props.on ? styles.on : styles.off)]}/>;
