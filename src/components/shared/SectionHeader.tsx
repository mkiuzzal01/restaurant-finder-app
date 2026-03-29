import { COLORS } from "@/style/Colors";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
};

export default function SectionHeader({ title, onPress }: Props) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.text,
    letterSpacing: -0.2,
  },

  seeAll: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,
  },
});
