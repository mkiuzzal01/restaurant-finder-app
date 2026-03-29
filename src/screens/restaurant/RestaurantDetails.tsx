import React from "react";
import { View, Text, Image, ScrollView, FlatList, Button, TouchableOpacity } from "react-native";
import { details, foodData } from "./restaurant-details";
import FoodCard from "@/components/cards/FoodCard";
import { styles } from "./style.Details";
import SectionHeader from "@/components/shared/SectionHeader";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantDetails() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{ uri: details.image }} style={styles.image} />
        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <Text style={styles.title}>{details.name}</Text>

          <View style={styles.row}>
            <Text style={styles.rating}>⭐ {details.rating}</Text>
            <Text style={styles.text}>{details.distance}</Text>
            <Text style={styles.text}>{details.price}</Text>
          </View>

          <Text style={styles.category}>{details.category}</Text>

          {details.deliveryTime && (
            <Text style={styles.delivery}>Delivery: {details.deliveryTime}</Text>
          )}

          {details.isTrending && (
            <Text style={styles.trending}>🔥 Trending Restaurant</Text>
          )}

          {/* Tags */}
          <View style={styles.tagContainer}>
            {details.tags?.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Menu Section */}
      <View >
        <SectionHeader title="List of Foods" onPress={() => { navigation.navigate("AllFoods", { type: "food" }) }} />
        <FlatList
          data={foodData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <FoodCard
              item={item}
            />
          )}
        />
      </View>

      <View>

      </View>

    </ScrollView>
  );
}
