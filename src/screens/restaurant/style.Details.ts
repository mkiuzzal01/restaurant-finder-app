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

  infoContainer: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 10,
  },

  rating: {
    fontSize: 16,
    fontWeight: "600",
  },

  text: {
    fontSize: 16,
    color: "#555",
  },

  category: {
    fontSize: 18,
    marginBottom: 10,
  },

  delivery: {
    fontSize: 16,
    color: "#444",
    marginBottom: 10,
  },

  trending: {
    color: "#ff6600",
    fontWeight: "bold",
    marginBottom: 10,
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  tag: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    fontSize: 13,
  },
  menuContainer: {
    marginTop: 20,
  },

  menuTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#1a1a1a",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingHorizontal: 16,
  },

  gridItem: {
    width: "48%",
  },
});
