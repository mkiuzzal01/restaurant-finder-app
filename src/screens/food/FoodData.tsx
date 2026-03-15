export interface TFoodData {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  isTrending: boolean;
  deliveryTime: string;
  tags: string[];
}

export const foodData: TFoodData = {
  id: "1",
  name: "Pizza",
  image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  price: 10,
  rating: 4.5,
  category: "Italian",
  description: "Delicious pizza with fresh ingredients",
  isTrending: true,
  deliveryTime: "30 minutes",
  tags: ["Pizza", "Italian", "Fast Food"],
};
