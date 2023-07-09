import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View
      style={styles.container}>
      <Text
        style={styles.content}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    backgroundColor: "#F4CE14",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});