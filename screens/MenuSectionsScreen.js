// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {MenuScreen} from "./menu/MenuScreen"
// const Tab = createBottomTabNavigator();
// export default () => {
//   return (
//     // <NavigationContainer>
//       <Tab.Screen name = "Menu" component={MenuScreen}/>
//     // </NavigationContainer>
//   );
// };

import { SectionList, Text, View, StyleSheet } from "react-native";

export default () => {
  const menuItemsToDisplay = [
    {
      title: "Appetizers",
      data: [
        { name: "Hummus", price: "$5.00", id: 1 },
        { name: "Moutabal", price: "$5.00", id: 2 },
        { name: "Falafel", price: "$7.50", id: 3 },
        { name: "Marinated Olives", price: "$5.00", id: 4 },
        { name: "Kofta", price: "$5.00", id: 5 },
        { name: "Eggplant Salad", price: "$8.50", id: 6 },
      ],
    },
    {
      title: "Main Dishes",
      data: [
        { name: "Lentil Burger", price: "$10.00", id: 7 },
        { name: "Smoked Salmon", price: "$14.00", id: 8 },
        { name: "Kofta Burger", price: "$11.00", id: 9 },
        { name: "Turkish Kebab", price: "$15.50", id: 10 },
      ],
    },
    {
      title: "Sides",
      data: [
        { name: "Fries", price: "$3.00", id: 11 },
        { name: "Buttered Rice", price: "$3.00", id: 12 },
        { name: "Bread Sticks", price: "$3.00", id: 13 },
        { name: "Pita Pocket", price: "$3.00", id: 14 },
        { name: "Lentil Soup", price: "$3.75", id: 15 },
        { name: "Greek Salad", price: "$6.00", id: 16 },
        { name: "Rice Pilaf", price: "$4.00", id: 17 },
      ],
    },
    {
      title: "Desserts",
      data: [
        { name: "Baklava", price: "$3.00", id: 18 },
        { name: "Tartufo", price: "$3.00", id: 19 },
        { name: "Tiramisu", price: "$5.00", id: 20 },
        { name: "Panna Cotta", price: "$5.00", id: 21 },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{section.title}</Text>
    </View>
  );

  const renderSectionFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>End of Menu</Text>
    </View>
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={renderSectionFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#18191a" },
  list: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#777",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  header: {
    marginTop: 20,
    backgroundColor: "#ee5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#ee5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

