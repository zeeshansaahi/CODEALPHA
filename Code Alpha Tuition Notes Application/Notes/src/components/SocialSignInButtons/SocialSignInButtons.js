import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('Sign in with Facebook pressed');
  };

  const onSignInGoogle = () => {
    console.warn('Sign in with Google pressed');
  };

  return (
    <>
      <CustomButton
        onPress={onSignInFacebook}
        text="Sign In with Facebook"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />

      <CustomButton
        onPress={onSignInGoogle}
        text="Sign In with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  );
};

export default SocialSignInButtons;
