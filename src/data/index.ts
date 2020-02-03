export type PizzaOption = {
  name: string;
  price: number;
};

export const PIZZA_SIZES: PizzaOption[] = [
  { name: 'Small', price: 2.0 },
  { name: 'Medium', price: 5.0 },
  { name: 'Large', price: 1.0 }
];

export const PIZZA_CRUSTS: PizzaOption[] = [
  { name: 'Thin', price: 2.0 },
  { name: 'Thick', price: 3.0 }
];

export const PIZZA_INGREDIENTS: PizzaOption[] = [
  { name: 'Pepperoni', price: 0.5 },
  { name: 'Chicken', price: 0.5 },
  { name: 'Sweetcorn', price: 0.5 },
  { name: 'Pineapple', price: 0.5 },
  { name: 'Bacon', price: 0.5 },
  { name: 'Beef', price: 0.5 }
];
