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
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const SignUpScreen = () => {
  const navigation = useNavigation();

  const {control, handleSubmit, watch} = useForm();

  const pwd = watch('password');

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Terms of Use Pressed');
  };

  const onPrivacyPressed = () => {
    console.warn('Privacy Policy Pressed');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required!',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long!',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long!',
            },
          }}
        />

        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{pattern: {value: EMAIL_REGEX, message: 'Invalid Email!'}}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long!',
            },
          }}
        />

        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Confirm Password"
          secureTextEntry
          rules={{
            required: 'Please confirm your password',
            validate: value => value === pwd || 'Password does not match!',
          }}
        />

        <CustomButton
          onPress={handleSubmit(onRegisterPressed)}
          text="Register"
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign In"
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
export default SignUpScreen;
