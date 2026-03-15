import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/home/Home";
import Cart from "@/screens/cart/Cart";
import Profile from "@/screens/profile/Profile";

const Tabs = createBottomTabNavigator({
  initialRouteName: "Home",
  screens: {
    Home: Home,
    Cart: Cart,
    Profile: Profile,
  },
});

export default Tabs;
