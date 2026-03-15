import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 250,
  },

  info: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  rating: {
    fontSize: 16,
    marginBottom: 6,
  },

  category: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: "#444",
    marginBottom: 10,
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff4d4f",
  },

  delivery: {
    marginTop: 6,
    fontSize: 14,
    color: "#555",
  },

  addToCartBtn: {
    backgroundColor: "#ff4d4f",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  addToCartBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
