import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { Restaurant } from '../../screens/home/restaurantData';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { addToWishList } from '@/redux/Features/wishlist/wishListSlice';

interface FavoriteCardProps {
  item: Restaurant;
}

export default function FoodCard({ item }: FavoriteCardProps) {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.wishList);

  const isFavorited = items.some((i) => i.id === item.id);

  const handleFavoritePress = () => {
    dispatch(addToWishList({ id: item.id, name: item.name, image: item.image, price: item.price }));
    ToastAndroid.show("Added to wishlist", ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => { navigation.navigate("Food", { id: item?.id }) }} activeOpacity={0.85}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.openBadge}>
          <Text style={styles.openBadgeText}>Open</Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <TouchableOpacity onPress={handleFavoritePress} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Ionicons
              name={isFavorited ? 'heart' : 'heart-outline'}
              size={18}
              color={isFavorited ? '#E24B4A' : '#aaa'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={13} color="#F0A500" />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.ratingCount}>(320)</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>{item.distance} km</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.meta}>৳ {item.price}</Text>
          </View>
          <View style={styles.timeBadge}>
            <Text style={styles.timeBadgeText}>{item.deliveryTime}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: '#fcf0f0ff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.07)',
  },
  imageContainer: {
    width: '100%',
    height: 120,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
  },
  openBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  openBadgeText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '500',
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
    flex: 1,
    marginRight: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 10,
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1a1a1a',
    marginLeft: 3,
  },
  ratingCount: {
    fontSize: 13,
    color: '#888',
    marginLeft: 2,
  },
  dot: {
    fontSize: 13,
    color: '#bbb',
    marginHorizontal: 4,
  },
  category: {
    fontSize: 13,
    color: '#888',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meta: {
    fontSize: 12,
    color: '#888',
  },
  timeBadge: {
    backgroundColor: '#EAF3DE',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  timeBadgeText: {
    fontSize: 12,
    color: '#3B6D11',
    fontWeight: '500',
  },
});
