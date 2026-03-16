import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./homeStyle";
import { dataSet } from "./restaurantData";
import FavoriteCard from "../../components/cards/FavoriteCard";
import PopularCard from "@/components/cards/PopularCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const favorite = dataSet.find((d) => d.type === "favorite")?.data || [];
  const popular = dataSet.find((d) => d.type === "popular")?.data || [];
  const recommended = dataSet.find((d) => d.type === "recommended")?.data || [];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning 👋</Text>
          <Text style={styles.headline}>
            Find the best restaurants near you
          </Text>
        </View>

        <TouchableOpacity style={styles.notifBtn}>
          <FontAwesome name="bell" size={22} color="#1a1a1a" />
          <View style={styles.notifDot} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <FontAwesome name="search" size={18} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants, cuisines..."
          placeholderTextColor="#bbb"
          value={search}
          onChangeText={setSearch}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <FontAwesome name="close" size={18} color="#bbb" style={styles.searchIcon} />
          </TouchableOpacity>
        )}
      </View>

      {/* ── Favourites ── */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Favourites</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={favorite}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => (
          <View style={styles.contentContainerStyle}>
            <FavoriteCard
              item={item}
              isFavorited={favorites.has(item.id)}
              onFavoritePress={() => toggleFavorite(item.id)}
            />
          </View>
        )}
      />

      {/* ── Popular Near You ── */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Near You</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        <View style={styles.grid}>
          {popular.map((item) => (
            <View key={item.id} style={styles.gridItem}>
              <PopularCard item={item} />
            </View>
          ))}
        </View>
      </View>

      {/* ── Recommended For You ── */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended For You</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        <View style={styles.grid}>
          {recommended.map((item) => (
            <View key={item.id} style={styles.gridItem}>
              <PopularCard item={item} />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.bottomPad} />
    </ScrollView>
  );
}
