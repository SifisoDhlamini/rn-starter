import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { color } from "react-native-reanimated";

const BoxScreen = () => {
  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.childViewOneStyle} />
      <View style={styles.childViewTwoStyle} />
      <View style={styles.childViewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    borderWidth: 3,
    borderColor: "black",
    //alignItems: "center",
    flexDirection: "row",
    height: 400,
    justifyContent: "space-between",
  },
  childViewOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 100,
    width: 100,
    backgroundColor: "rgba(255, 0, 0, 0.5)", // red color with 50% opacity
  },
  childViewTwoStyle: {
    borderWidth: 3,
    borderColor: "green",
    //flex: 3,
    height: 100,
    width: 100,
    backgroundColor: "rgba(0, 255, 0, 0.5)", // red color with 50% opacity
    //marginTop: 100,
    top: 100,
  },
  childViewThreeStyle: {
    borderWidth: 3,
    borderColor: "blue",
    //flex: 3,
    height: 100,
    width: 100,
    backgroundColor: "rgba(0, 0, 255, 0.5)", // red color with 50% opacity
  },
});

export default BoxScreen;
