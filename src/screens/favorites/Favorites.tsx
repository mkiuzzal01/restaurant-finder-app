import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks';
import { removeFromWishList } from '@/redux/Features/wishlist/wishListSlice';
import { styles } from './style.favorites';
import { useNavigation } from '@react-navigation/native';

export default function Favorites() {
  const navigation = useNavigation<any>();
  const { items } = useAppSelector((state) => state.wishList);
  const dispatch = useAppDispatch();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card} onPress={() => { navigation.navigate("Food", { id: item?.id }) }}>
      {/* Product Image */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Product Info */}
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
        {item.price && <Text style={styles.price}>৳ {item.price}</Text>}
      </View>

      {/* Remove Button */}
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => dispatch(removeFromWishList(item.id))}
      >
        <Text style={styles.remove}>✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // Empty state
  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your favorites list is empty 💔</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
