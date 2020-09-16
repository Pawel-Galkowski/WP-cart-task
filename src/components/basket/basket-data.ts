export interface BasketData {
  items: BasketItem[];

  onAllItemsDeleted: () => void;
  onItemAdded: (id: string) => void;
  onItemDeleted: (id: string) => void;
}

export interface BasketItem {
  id: string;
  name: string;
  manufacturer?: Array<string>;
  costInCredits?: number;
  amount: number;
}
