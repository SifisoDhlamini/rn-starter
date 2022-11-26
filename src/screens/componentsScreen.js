import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
//This is a functional component
const ComponentsScreen = () => {
    const name = "ScifiTheDev";
    return (
        <View>
            <Text style = {styles.textStyle}>Getting started with react Native!</Text>
            <Text style={styles.subHeaderStyle}>Hi my name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;
