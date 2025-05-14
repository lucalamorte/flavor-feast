
// ✅ context/RecipeContext.tsx - CORREGIDO
import React, { createContext, useContext, useState } from 'react';
import { Recipe } from '../types';

export type RootStackParamList = {
  HomeTabs: undefined;
  RecipeDetails: { recipe: Recipe };
};

type RecipeContextType = {
  recipes: Recipe[];
  myRecipes: Recipe[];
  favorites: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  editRecipe: (id: string, updatedRecipe: Partial<Recipe>) => void;
  deleteRecipe: (id: string) => void;
  toggleFavorite: (recipe: Recipe) => void;
  isFavorite: (id: string) => boolean;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error('useRecipeContext must be used inside RecipeProvider');
  return context;
};

const initialRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Pizza de Pepperoni',
    author: 'Helena Rizzo',
    time: '110 min',
    rating: 5,
    category: 'Pizza',
    image: require('../assets/pizza.jpg'),
    ingredients: [
      { name: 'Harina', quantity: 500 },
      { name: 'Queso', quantity: 200 },
      { name: 'Salsa de tomate', quantity: 100 },
    ],
    steps: [
      {
        description: 'Mezclá el agua tibia con la levadura seca y el azúcar. Dejá reposar 10 minutos hasta que se forme espuma en la superficie.',
        image: require('../assets/paso1.jpg'),
      },
      {
        description: 'En un bowl grande, colocá la harina y la sal. Agregá la mezcla de levadura activada y el aceite de oliva.',
        image: require('../assets/paso2.jpg'),
      },
      {
        description: 'Formá un bollo, colocá en un bowl aceitado, cubrí con film y dejá leudar 1h o hasta que duplique su tamaño.',
        image: require('../assets/paso3.jpg'),
      },
      {
        description: 'Estirá la masa, agregá salsa, queso y pepperoni. Horneá 12-15 min hasta que esté dorada.',
        image: require('../assets/paso4.jpg'),
      },
    ],
    createdByUser: false,
  },
];

export const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const myRecipes = recipes.filter((r) => r.createdByUser);

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prev) => [...prev, { ...recipe, createdByUser: true }]);
  };
  

  const editRecipe = (id: string, updated: Partial<Recipe>) => {
    setRecipes((prev) => prev.map((r) => (r.id === id ? { ...r, ...updated } : r)));
  };

  const deleteRecipe = (id: string) => {
    console.log('🗑️ Eliminando receta con ID:', id);
    setRecipes((prev) => prev.filter((r) => r.id !== id));
    setFavorites((prev) => prev.filter((r) => r.id !== id));
  };

  const toggleFavorite = (recipe: Recipe) => {
    setFavorites((prev) => {
      const exists = prev.some((r) => r.id === recipe.id);
      return exists ? prev.filter((r) => r.id !== recipe.id) : [...prev, recipe];
    });
  };

  const isFavorite = (id: string) => {
    return favorites.some((r) => r.id === id);
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, myRecipes, favorites, addRecipe, editRecipe, deleteRecipe, toggleFavorite, isFavorite }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
