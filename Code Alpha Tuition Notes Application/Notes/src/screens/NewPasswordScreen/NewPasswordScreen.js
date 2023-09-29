import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = data => {
    console.warn(data);
    navigation.navigate('Dashboard');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>

        <CustomInput
          name="code"
          placeholder="Code"
          control={control}
          rules={{
            required: ' Code is required!',
          }}
        />

        <CustomInput
          name="new-password"
          placeholder="Enter your new Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long!',
            },
          }}
        />

        <CustomButton onPress={handleSubmit(onSubmitPressed)} text="Submit" />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
export default NewPasswordScreen;
