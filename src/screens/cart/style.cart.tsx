import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 12,
    alignItems: "center",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,

  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "500", color: "#111" },
  price: { fontSize: 14, fontWeight: "400", color: "#666", marginVertical: 4 },
  qtyContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  qtyBtn: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: { fontSize: 16, fontWeight: "600", color: "#333" },
  qty: { marginHorizontal: 12, fontSize: 16, fontWeight: "500" },
  removeBtn: {
    marginLeft: 8,
    padding: 6,
  },

  remove: {
    fontSize: 16,
    color: "#ff6b6b",
  },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 18, color: "#888", fontWeight: "500" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalLabel: { fontSize: 16, fontWeight: "500", color: "#333" },
  total: { fontSize: 18, fontWeight: "700", color: "#111", marginTop: 2 },
  checkoutBtn: {
    backgroundColor: "#ff5a5f",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  checkoutText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  clearContainer: { marginTop: 12, alignItems: "center" },
  clear: { color: "#ff5a5f", fontSize: 14, fontWeight: "600" },
});
