import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.style}>Student Buddy</Text>
      <Button
        onPress={() => console.log("Button pressed")}
        title="Go to Components Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  style: {
    fontSize: 30
  }
});

export default HomeScreen;
