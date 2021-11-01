/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
} from "react-native";

const CircleButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        margin: props.margin,
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: props.size * 2,
        marginBottom: 10,
      }}
      onPress={props.onPress}
    >
      <Image source={props.source} />
    </TouchableOpacity>
  );
};

export default CircleButton;
