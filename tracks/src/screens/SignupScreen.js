import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
            <Spacer size={10}>
                <Text h3>Sign Up For Tracker</Text>
            </Spacer>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
            />
            <Spacer size={5} />
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Spacer size={10}>
                <Button title="Sign Up" />
            </Spacer>
    </View>
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 50
    }
});

export default SignupScreen;