import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-paper";

export default function LoginScreen(props) {

  const [logged, setLogged] = useState(false);
  const [userMail, onChangeUserMail] = useState("");
  const [userPassword, onChangeUserPassword] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>

            <Text style={styles.regularText}>Login to continue </Text>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              autoFocus={true}
              maxLength={35}
              value={userMail}
              onChangeText={onChangeUserMail}
              placeholder="Your Email..."
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              maxLength={35}
              value={userPassword}
              onChangeText={onChangeUserPassword}
              placeholder="Your Password..."
              secureTextEntry={true}
            />
            <Pressable
              style={styles.login}
              onPress={() => props.navigation.navigate("Welcome")}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18191a",

    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  label: {
    fontSize: 24,
    paddingLeft: 20,
    paddingTop: 20,
    marginVertical: 8,
    color: "#EDEFEE",
  },
  input: {
    marginHorizontal: 10,
    height: 45,
    fontSize: 18,
  },
  login: {
    width: 200,
    height: 50,
    backgroundColor: "blue",
    alignSelf: "center",
    marginTop: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 20,
  },
});
