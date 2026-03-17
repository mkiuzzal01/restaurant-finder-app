import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'
import React from 'react'
import { styles } from './style.profile'
import { useNavigation } from '@react-navigation/native'

const menuItems = [
  { id: '1', title: 'My Favorites', navigate: 'Favorites' },
  { id: '2', title: 'My Reviews', navigate: 'Reviews' },
  { id: '3', title: 'Order History', navigate: 'OrderHistory' },
  { id: '4', title: 'Settings', navigate: 'Settings' },
  { id: '5', title: 'Help & Support', navigate: 'HelpAndSupport' },
]

export default function Profile() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=8' }}
          style={styles.avatar}
        />

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.location}>Dhaka, Bangladesh</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Visits</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.btnText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Menu List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.navigate)}>
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  )
}

