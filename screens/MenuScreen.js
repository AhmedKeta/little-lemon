import { ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
export default () => {
  const menuItemsToDisplay = [
    { name: "Hummus", price: "$5.00", id: "1A" },
    { name: "Moutabal", price: "$5.00", id: "2B" },
    { name: "Falafel", price: "$7.50", id: "3C" },
    { name: "Marinated Olives", price: "$5.00", id: "4D" },
    { name: "Kofta", price: "$5.00", id: "5E" },
    { name: "Eggplant Salad", price: "$8.50", id: "6F" },
    { name: "Lentil Burger", price: "$10.00", id: "7G" },
    { name: "Smoked Salmon", price: "$14.00", id: "8H" },
    { name: "Kofta Burger", price: "$11.00", id: "9I" },
    { name: "Turkish Kebab", price: "$15.50", id: "10J" },
    { name: "Fries", price: "$3.00", id: "11K" },
    { name: "Buttered Rice", price: "$3.00", id: "12L" },
    { name: "Bread Sticks", price: "$3.00", id: "13M" },
    { name: "Pita Pocket", price: "$3.00", id: "14N" },
    { name: "Lentil Soup", price: "$3.75", id: "15O" },
    { name: "Greek Salad", price: "$6.00", id: "16Q" },
    { name: "Rice Pilaf", price: "$4.00", id: "17R" },
    { name: "Baklava", price: "$3.00", id: "18S" },
    { name: "Tartufo", price: "$3.00", id: "19T" },
    { name: "Tiramisu", price: "$5.00", id: "20U" },
    { name: "Panna Cotta", price: "$5.00", id: "21V" },
  ];
  const Item = ({ name, price }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
    const Header = () => (
      <View style={styles.header}>
        <Text style={styles.headerText}>Our Menu</Text>
      </View>
    );
    const Footer = () => (
      <View style={styles.footer}>
        <Text style={styles.footerText}>End of Menu</Text>
      </View>
    );
  const renderItem = ({ item }) => {
    return <Item name={item.name} price={item.price} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#18191a" },
  list: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
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
    marginHorizontal: 20,
  },
  header: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
