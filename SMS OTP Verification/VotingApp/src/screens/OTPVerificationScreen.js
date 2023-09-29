// OTPVerificationScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const OTPVerificationScreen = () => {
  const [otp, setOTP] = useState("");
  const { confirmation } = route.params; // Get 'confirmation' from navigation
  const handleVerifyOTP = async () => {
    try {
      const response = await confirmation.confirm(otp);
      // User is verified, navigate to the next screen
    } catch (error) {
      console.error(error);
      // Handle OTP verification error (e.g., display an error message)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text>Enter the OTP sent to your mobile number:</Text>
      <TextInput
        style={styles.input}
        placeholder="OTP Code"
        keyboardType="number-pad"
        onChangeText={(text) => setOTP(text)}
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default OTPVerificationScreen;
