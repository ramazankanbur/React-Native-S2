import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import Spacer from './Spacer';

const Authform = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <Spacer size={10}>
            <Text h3>{headerText}</Text>
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
        {errorMessage ? <Spacer size={10}><Text style={styles.errorMessage}>{errorMessage}</Text></Spacer> : null}
        <Spacer size={10}>
            <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
        </Spacer>
    </>
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red'
    },
});

export default Authform;
