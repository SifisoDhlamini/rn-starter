import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = {color : "Hi from variable"};
    const anotherGreeting = <Text style={styles.subHeaderStyle}>Hi from another variable</Text>;
    return (
        <View>
            <Text style = {styles.textStyle}>This is from the ComponentsScreen</Text>
            <Text style = {styles.subHeaderStyle}>{greeting.color}</Text>
            {anotherGreeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;
