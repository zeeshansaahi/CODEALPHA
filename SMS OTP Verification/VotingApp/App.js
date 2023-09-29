import "react-native-gesture-handler";
import "firebase/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import OTPVerificationScreen from "./src/screens/OTPVerificationScreen";

const Stack = createStackNavigator();
// firebase;
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
