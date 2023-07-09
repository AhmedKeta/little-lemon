import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./screens/WelcomeScreen";
import MenuScreen from "./screens/MenuScreen";
import MenuSectionsScreen from "./screens/MenuSectionsScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#495E57" },
            headerTintColor: "#EDEFEE",
            headerTitleStyle: {
              fontWeight:"bold"
            }
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Menu Selection" component={MenuSectionsScreen} />
          {/* <View
            style={styles.body}> */}
          {/* <LittleLemonHeader /> */}
          {/* <LoginScreen /> */}
          {/* <WelcomeScreen /> */}
          {/* <MenuScreen /> */}
          {/* <MenuSectionsScreen /> */}
          {/* </View> */}
          {/* <View style={styles.footer}>
            <LittleLemonFooter />
          </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#18191a",
  },
  footer: { backgroundColor: "#495E57" },
});
