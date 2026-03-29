import Home from "@/screens/home/Home";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="HomeMain" component={Home} />
      <stack.Screen name="Restaurants" component={RestaurantDetails} />
    </stack.Navigator>
  );
}
