import AllFoods from "@/screens/food/AllFoods";
import FoodDetails from "@/screens/food/FoodDetails";
import Home from "@/screens/home/Home";
import AllRestaurant from "@/screens/restaurant/AllRestaurant";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="HomeMain" component={Home} />
      <stack.Screen name="Restaurants" component={RestaurantDetails} />
      <stack.Screen name="Food" component={FoodDetails} />
      <stack.Screen name="AllFoods" component={AllFoods} />
      <stack.Screen name="AllRestaurant" component={AllRestaurant} />
    </stack.Navigator>
  );
}
