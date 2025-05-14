import { ImageSourcePropType } from 'react-native';

export type Ingredient = {
  name: string;
  quantity: number;
};

export type Step = {
  text: string;
  image?: ImageSourcePropType;
};

export type Recipe = {
  id: string;
  title: string;
  author: string;
  time: string;
  rating: number;
  category: string;
  image: ImageSourcePropType;
  ingredients: Ingredient[];
  steps: Step[];
};

export type RootStackParamList = {
  Home: undefined;
  Favorites: undefined;
  Profile: undefined;
  MyRecipes: undefined;
  RecipeDetails: { recipe: Recipe };
  RecipeForm: { recipe?: Recipe; isEdit?: boolean };
  RecipeSteps: { recipe: Recipe; isEdit?: boolean };
};