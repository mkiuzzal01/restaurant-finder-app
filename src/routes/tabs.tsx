import React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import Cart from "@/screens/cart/Cart";
import Profile from "@/screens/profile/Profile";
import Favorites from "@/screens/favorites/Favorites";
import { useAppSelector } from "@/redux/hooks/hooks";

const Tab = createBottomTabNavigator();

const Badge = ({ count }: { count: number }) => {
  if (!count) return null;
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{count > 9 ? "9+" : count}</Text>
    </View>
  );
};

type TabIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  activeName: keyof typeof Ionicons.glyphMap;
  color: string;
  focused: boolean;
  badge?: number;
};

const TabIcon = ({ name, activeName, color, focused, badge = 0 }: TabIconProps) => (
  <View style={styles.iconWrap}>
    <Ionicons name={focused ? activeName : name} size={22} color={color} />
    <Badge count={badge} />
  </View>
);

type FabProps = {
  onPress: () => void;
  focused: boolean;
  badge?: number;
};

const CenterFab = ({ onPress, focused, badge = 0 }: FabProps) => (
  <TouchableOpacity
    style={[styles.fab, focused && styles.fabActive]}
    onPress={onPress}
    activeOpacity={0.85}
  >
    <Ionicons
      name={focused ? "cart" : "cart-outline"}
      size={26}
      color="#ffffff"
    />
    <Badge count={badge} />
  </TouchableOpacity>
);

export default function TabsNavigator() {
  const { items } = useAppSelector(state => state.cart)

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E8692A",
        tabBarInactiveTintColor: "#C0BFBC",
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
        tabBarBackground: () => <View style={styles.tabBarBg} />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="home-outline" activeName="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HomeStack}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="search-outline" activeName="search" color={color} focused={focused} />
          ),
        }}
      />

      {/* Center FAB */}
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => null,
          tabBarButton: (props) => (
            <CenterFab
              onPress={props.onPress as () => void}
              focused={props.accessibilityState?.selected ?? false}
              badge={items.length}
            />
          ),
        }}
      />

      {/* Right side */}
      <Tab.Screen
        name="Saved"
        component={Favorites}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="heart-outline" activeName="heart" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="person-outline" activeName="person" color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderTopWidth: 0,
    elevation: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    paddingBottom: 0,
  },
  tabBarBg: {
    flex: 1,
    borderRadius: 28,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  tabItem: {
    paddingVertical: 10,
    borderRadius: 16,
    marginHorizontal: 2,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "700",
    marginTop: 2,
    letterSpacing: 0.2,
  },
  iconWrap: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  fab: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: "#E8692A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Platform.OS === "ios" ? 24 : 20,
    alignSelf: "center",
    shadowColor: "#E8692A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
    position: "relative",
  },
  fabActive: {
    backgroundColor: "#c9541e",
  },

  badge: {
    position: "absolute",
    top: -5,
    right: -8,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "800",
    lineHeight: 11,
  },
});
