import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 20,
    paddingTop: 20,
  },

  greeting: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },

  headline: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1a1a1a",
    width: "80%",
    lineHeight: 32,
  },
  notifBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  notifDot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E24B4A",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  contentContainerStyle: {
    gap: 12,
  },

  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcf0f0ff",
    borderRadius: 14,
    marginBottom: 24,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.07)",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#1a1a1a",
    padding: 12,
  },

  // Section headers
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  seeAll: {
    fontSize: 14,
    color: "#E8692A",
    fontWeight: "500",
  },

  favoriteCardWrap: {
    width: 250,
  },

  // Category chips
  categoryList: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f3",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.07)",
  },
  categoryChipActive: {
    backgroundColor: "#E8692A",
    borderColor: "#E8692A",
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#666",
  },
  categoryTextActive: {
    color: "#fff",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  gridItem: {
    width: "47.5%",
    height: "100%",
    marginBottom: 10,
  },

  // Empty state
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
    gap: 12,
  },
  emptyText: {
    fontSize: 15,
    color: "#bbb",
  },

  bottomPad: {
    height: 32,
  },
});
