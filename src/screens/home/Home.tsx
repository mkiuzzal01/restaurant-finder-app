import RestaurantCard from "@/components/cards/RestaurantCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { COLORS } from "@/style/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./homeStyle";
import { CATEGORIES, Restaurant, dataSet } from "./restaurantData";


export default function Home() {
  const navigation = useNavigation<any>();
  const [sections, setSections] = useState({
    favorite: [] as Restaurant[],
    popular: [] as Restaurant[],
    recommended: [] as Restaurant[],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    try {
      const getData = (type: string) =>
        dataSet.find((d) => d.type === type)?.data || [];
      setSections({
        favorite: getData("favorite"),
        popular: getData("popular"),
        recommended: getData("recommended"),
      });
    } catch (error) {
      console.log("Error loading items:", error);
    } finally {
      setIsLoading(false);
    }
  };



  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#E8692A" />
      </View>
    );
  }



  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* ── Header ── */}
      <View style={styles.header}>
        <View>
          <View style={styles.greetingTag}>
            <View style={styles.greetingDot} />
            <Text style={styles.greetingText}>Good morning</Text>
          </View>
          <Text style={styles.headline}>Find the best{"\n"}restaurants near you</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn} activeOpacity={0.8}>
          <Ionicons name="notifications-outline" size={20} color={COLORS.text} />
          <View style={styles.notifDot} />
        </TouchableOpacity>
      </View>

      {/* ── Search ── */}
      <View style={styles.searchWrapper}>
        <FontAwesome name="search" size={16} color={COLORS.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants..."
          placeholderTextColor={COLORS.textMuted}
          value={search}
          onChangeText={setSearch}
          returnKeyType="search"
        />
        {search.length > 0 ? (
          <TouchableOpacity onPress={() => setSearch("")} activeOpacity={0.7}>
            <FontAwesome name="times-circle" size={16} color={COLORS.textMuted} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.micBtn} activeOpacity={0.85}>
            <Ionicons name="mic-outline" size={15} color="#fff" />
          </TouchableOpacity>
        )}
      </View>

      {/* ── Category Pills ── */}
      <FlatList
        data={CATEGORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => {
          const isActive = activeCategory === item.id;
          return (
            <TouchableOpacity
              style={isActive ? styles.categoryPillActive : styles.categoryPillInactive}
              activeOpacity={0.8}
              onPress={() => setActiveCategory(item.id)}
            >
              {item.emoji ? (
                <Text style={{ fontSize: 13 }}>{item.emoji}</Text>
              ) : (
                <Ionicons
                  name="home-outline"
                  size={13}
                  color={isActive ? "#fff" : "#555"}
                />
              )}
              <Text
                style={isActive ? styles.categoryTextActive : styles.categoryTextInactive}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* ── My Favourites ── */}
      <SectionHeader title="My Favourites" onPress={() => navigation.navigate("AllRestaurant", { type: "favorite" })} />
      <FlatList
        data={sections.favorite}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.horizontalList}
        renderItem={({ item }) => <RestaurantCard item={item} />}
      />

      {/* ── Popular Near You ── */}
      <SectionHeader title="Popular Near You" onPress={() => navigation.navigate("AllRestaurant", { type: "popular" })} />
      <FlatList
        data={sections.popular}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <RestaurantCard item={item} />}
      />

      {/* ── Recommended ── */}
      <SectionHeader title="Recommended For You" onPress={() => navigation.navigate("AllRestaurant", { type: "recommended" })} />
      <FlatList
        data={sections.recommended}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <RestaurantCard item={item} />}
      />

      <View style={styles.bottomPad} />

    </ScrollView>
  );
}
