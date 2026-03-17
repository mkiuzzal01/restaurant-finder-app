import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7fb",
  },

  // 🧾 Card
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
  },

  price: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },

  // ➕➖ Quantity
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f2f6",
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  qtyBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  qtyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff6b6b",
  },

  qty: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: "600",
  },

  // ❌ Remove button
  removeBtn: {
    marginLeft: 8,
    padding: 6,
  },

  remove: {
    fontSize: 16,
    color: "#999",
  },

  // 🧾 Footer
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    color: "#888",
    fontSize: 12,
  },

  total: {
    fontSize: 20,
    fontWeight: "bold",
  },

  checkoutBtn: {
    backgroundColor: "#ff6b6b",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  // 🗑 Clear
  clear: {
    textAlign: "center",
    color: "red",
    marginTop: 10,
    marginBottom: 90,
  },

  // 🛒 Empty
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 16,
    color: "#aaa",
  },
});
