import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
//This is a functional component
const ComponentsScreen = () => {
    const name = "ScifiTheDev";
    return (
        <View>
            <Text style = {styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>{name} going mobile</Text>
            <Text style={styles.subsubHeaderStyle}>......humble beginings</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45,
        textAlign: 'center'
    },
    subHeaderStyle:{
        fontSize: 30,
        //textAlign: 'center'
    }
    ,
    subsubHeaderStyle:{
        fontSize: 20,
        //textAlign: 'center'
    }
});

export default ComponentsScreen;
