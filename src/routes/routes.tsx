import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import Tabs from "./tabs";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";
import FoodDetails from "@/screens/food/FoodDetails";
import Favorites from "@/screens/favorites/Favorites";
import Checkout from "@/screens/checkout/Checkout";

const rootStack = createNativeStackNavigator({
  initialRouteName: "Tabs",
  screens: {
    Tabs: {
      screen: Tabs,
      options: {
        headerShown: false,
      },
    },
    Restaurants: {
      screen: RestaurantDetails,
      options: {
        headerShown: false,
      },
    },
    Food: {
      screen: FoodDetails,
      options: {
        headerShown: false,
      },
    },
    Favorites: {
      screen: Favorites,
      options: {
        headerShown: false,
      },
    },
    Checkout: {
      screen: Checkout,
      options: {
        headerShown: false,
      },
    }
  }
});

const Navigation = createStaticNavigation(rootStack);

export default Navigation;
