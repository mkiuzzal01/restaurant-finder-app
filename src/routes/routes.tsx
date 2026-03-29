import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import Tabs from "./tabs";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";
import FoodDetails from "@/screens/food/FoodDetails";
import Favorites from "@/screens/favorites/Favorites";
import Checkout from "@/screens/checkout/Checkout";
import OrderHistory from "@/screens/order/OrderHistory";
import Reviews from "@/screens/reviews/Reviews";
import Settings from "@/screens/settings/Settings";
import HelpAndSupport from "@/screens/help/HelpAndSupport";
import AllRestaurant from "@/screens/restaurant/AllRestaurant";
import AllFoods from "@/screens/food/AllFoods";

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
    },
    OrderHistory: {
      screen: OrderHistory,
      options: {
        headerShown: false,
      },
    },
    Reviews: {
      screen: Reviews,
      options: {
        headerShown: false,
      },
    },
    Settings: {
      screen: Settings,
      options: {
        headerShown: false,
      },
    },
    HelpAndSupport: {
      screen: HelpAndSupport,
      options: {
        headerShown: false,
      },
    },
    AllRestaurant: {
      screen: AllRestaurant,
      options: {
        headerShown: false,
      },
    },
    AllFoods: {
      screen: AllFoods,
      options: {
        headerShown: false,
      },
    },
  }
});

const Navigation = createStaticNavigation(rootStack);

export default Navigation;
