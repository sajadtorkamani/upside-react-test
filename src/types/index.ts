export type PizzaOption = {
  id: number;
  name: string;
  price: number;
};

export type SizeOption = PizzaOption;
export type CrustOption = PizzaOption;
export type IngredientOption = PizzaOption;

export type Order = {
  size: SizeOption;
  crust: CrustOption;
  ingredients: IngredientOption[];
};

