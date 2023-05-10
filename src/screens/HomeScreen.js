import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.style}>Student Buddy</Text>
      {/*A Button is a basic component that should render nicely on any platform. On iOS, the button uses a system color, whereas on Android, the button will use the theme color. */}
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Randomizer Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square2")}
        title="Go to Square Color Adjuster Demo"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Input Demo"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Layout Demo"
      />
      {/*TouchableOpacity is a button that is more customizable*/}
      {/* <TouchableOpacity onPress={()=> props.navigation.navigate("List") }>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  style: {
    fontSize: 30,
  },
});

export default HomeScreen;
