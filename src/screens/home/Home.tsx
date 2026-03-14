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
import { dataSet } from "./restaurantData";
import FavoriteCard from "../../components/cards/FavoriteCard";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./homeStyle";



export default function Home() {
  const [search, setSearch] = useState("");
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const favorite = dataSet.find((d) => d.type === "favorite");

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView
        showsVerticalScrollIndicator={true}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning 👋</Text>
            <Text style={styles.headline}>Find the best restaurants near you</Text>
          </View>

          <TouchableOpacity style={styles.notifBtn}>
            <Icon name="notifications-circle-outline" size={22} color="#1a1a1a" />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>

        {/* ── Search Bar ── */}
        <View style={styles.searchWrapper}>
          <Icon name="search" size={18} color="#aaa" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search restaurants, cuisines..."
            placeholderTextColor="#bbb"
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Icon name="close-circle" size={18} color="#bbb" />
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
          data={favorite?.data}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.favoriteCardWrap}>
              <FavoriteCard
                item={item}
                isFavorited={favorites.has(item.id)}
                onFavoritePress={() => setToggleFavorite(!toggleFavorite)}
              />
            </View>
          )}
        />
      </ScrollView>

    </View>
  );
}

