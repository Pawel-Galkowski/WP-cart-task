import { DataProvider } from "./basket-provider";
import { BasketItem } from "./basket-data";

export class MyBasketDataProvider implements DataProvider {
  registerToChanges(callback: (items: BasketItem[]) => void) {}

  products = [
    {
      id: "1",
      name: "star",
      manufacturer: ["man", "stab"],
      costInCredits: 55555,
      amount: 1,
    },
  ];

  items = [
    {
      id: "1",
      name: "star",
      manufacturer: ["man", "stab"],
      costInCredits: 55555,
      amount: 1,
    },
  ];

  getInitialData = (): Promise<BasketItem[]> => {
    return new Promise<BasketItem[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.items);
      }, 1000);
    });
  };

  onAllItemsDeleted(): Promise<BasketItem[]> {
    return new Promise<BasketItem[]>((resolve, reject) => {
      setTimeout(() => {
        this.items = [];

        resolve(this.items);
      }, 1000);
    });
  }

  onItemAdded(id: string): Promise<BasketItem[]> {
    return new Promise<BasketItem[]>((resolve, reject) => {
      setTimeout(() => {
        let index = this.items.findIndex((item) => item.id === id);
        if (index > -1) {
          this.items[index].amount++;
        } else {
          const index = this.products.findIndex((item) => item.id === id);
          if (index > -1) {
            const item = { ...this.products[index] };
            this.items.push(item);
          }
        }

        resolve(this.items);
      }, 1000);
    });
  }

  onItemDeleted = (id: string): Promise<BasketItem[]> => {
    return new Promise<BasketItem[]>((resolve, reject) => {
      setTimeout(() => {
        const index = this.items.findIndex((item) => item.id === id);
        if (index > -1) {
          this.items.splice(index, 1);
        }

        resolve(this.items);
      }, 1000);
    });
  };
}
