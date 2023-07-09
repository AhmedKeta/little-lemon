import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Little Lemon</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 0.15, backgroundColor: "#F4CE14" },
  header: {
    paddingHorizontal: 10,
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
