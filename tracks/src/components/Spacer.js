import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = (props) => {
    return <View style={{margin:props.size}}>
        {props.children}
    </View>
};

const styles = StyleSheet.create({
});

export default Spacer;