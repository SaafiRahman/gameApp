
import WelcomeScreen from './app/assets/Screens/WelcomeScreen';
import LoginScreen  from './app/assets/Screens/LoginScreen';
import RegisterScreen from './app/assets/Screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcomescreen'>
        <Stack.Screen name="welcomescreen" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen name="registerscreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

