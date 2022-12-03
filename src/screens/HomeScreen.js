import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.style}>Student Buddy</Text>
      {/*A Button is a basic component that should render nicely on any platform. On iOS, the button uses a system color, whereas on Android, the button will use the theme color. */}
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={()=> props.navigation.navigate("List") }>
      {/*TouchableOpacity is a button that is more customizable*/}
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  style: {
    fontSize: 30
  }
});

export default HomeScreen;
