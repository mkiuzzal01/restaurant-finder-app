import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";

import Tabs from "./tabs";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";
import FoodDetails from "@/screens/food/FoodDetails";

const rootStack = createNativeStackNavigator({
  initialRouteName: "Tabs",
  screens: {
    Tabs: {
      screen: Tabs,
      options: {
        headerShown: false,
      },
    },

    Restaurants: RestaurantDetails,
    Food: FoodDetails,
  },
});

const Navigation = createStaticNavigation(rootStack);

export default Navigation;
