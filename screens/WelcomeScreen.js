import { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ImageBackground,
  Pressable
} from "react-native";
import { TextInput } from "react-native-paper";

export default ({navigation}) => {
  const [userName, onChangeUserName] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}>
      {/* <ImageBackground
      source={require("../assets/img/lemon-logo.png")}
      > */}
      <ScrollView
        // keyboardDismissMode="on-drag"
        style={styles.container}
        indicatorStyle={"white"}
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={true}
        scrollIndicatorInsets={{ right: 10, foregroundColor: "black" }}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/img/lemon-logo.png")}
            // source={{ uri: "../assets/img/lemon-logo.png" }}
            resizeMode="contain"
          />
          <View style={styles.logoSeparator}></View>
          <View style={styles.logoText}>
            <Text style={styles.header}>Little Lemon</Text>
          </View>
        </View>
        <Text style={styles.header}>Hello {userName}</Text>
        <Text style={styles.header}>Welcome to Little Lemon</Text>
        <Text style={styles.body}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment.
        </Text>
        <TextInput
          value={userName}
          onChangeText={onChangeUserName}
          placeholder="Your Name"
          style={styles.input}
        />
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Menu Selection")}>
          <Text style={styles.loginText}>Menu</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.body}>Log out</Text>
        </Pressable>
      </ScrollView>
      {/* </ImageBackground> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { bottom: 0, flex: 1, backgroundColor: "#18191a" },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#e4e6eb",
    padding: 40,
  },
  body: {
    fontSize: 20,
    textAlign: "center",
    color: "#e4e6eb",
    padding: 20,
  },
  input: {
    margin: 10,
    height: 50,
    padding: 3,
    borderWidth: 1,
    borderBottomColor: "#eee",
    fontSize: 18,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  logoContainer: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  logo: {
    flex: 0.5,
    height: 120,
    width: 120,
  },
  logoSeparator: {
    height: 120,
    width: 2,
    backgroundColor: "#e4e6eb",
  },
  logoText: {
    flex: 1,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
});
