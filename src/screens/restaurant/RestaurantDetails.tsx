import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { details, foodData } from "./restaurant-details";
import FavoriteCard from "@/components/cards/FavoriteCard";
import { styles } from "./style.Details";

export default function RestaurantDetails({ route }: { route: any }) {
  const { id } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Restaurant Image */}
      <Image source={{ uri: details.image }} style={styles.image} />

      {/* Restaurant Info */}
      <View style={styles.infoContainer}>
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

      {/* Menu Section */}
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>List of Foods</Text>

        <FlatList
          data={foodData}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ gap: 5, justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <FavoriteCard
              item={item}
              isFavorited={false}
              onFavoritePress={() => { }}
            />
          )}
        />
      </View>

    </ScrollView>
  );
}
