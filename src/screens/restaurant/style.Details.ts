import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: 260,
  },


  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },

  seeAll: {
    color: "#FF6B35",
    fontWeight: "600",
    fontSize: 14,
  },

  rating: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },

  text: {
    fontSize: 14,
    color: "#666",
  },

  category: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },

  delivery: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },

  trending: {
    color: "#FF6B00",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 10,
  },

  /* Tags */

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },

  tag: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    fontSize: 12,
    color: "#444",
    fontWeight: "500",
  },


  menuTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111",
  },

  grid: {
    gap: 14,
  },

  gridItem: {
    width: "47.5%",
  },
});
