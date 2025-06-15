import { IBasketItem, } from "../interface/IBasketItem";
export class Apple implements IBasketItem {
  getPrice(quantity: number): number {
    return quantity * 0.35;
  }
}

export class Banana implements IBasketItem {
  getPrice(quantity: number): number {
    return quantity * 0.20;
  }
}

export class Melon implements IBasketItem {
  getPrice(quantity: number): number {
    return Math.ceil(quantity / 2) * 0.50;
  }
}

export class Lime implements IBasketItem {
  getPrice(quantity: number): number {
    return (Math.floor(quantity / 3) * 2 + (quantity % 3)) * 0.15;
  }
}
export class BasketService {
  private itemMap: Record<string, IBasketItem> = {
    "Apple": new Apple(),
    "Banana": new Banana(),
    "Melon": new Melon(),
    "Lime": new Lime()
  };

  public calculateTotal(basket: string[]): number {
    const counts: Record<string, number> = {};
    for (const item of basket) {
      counts[item] = (counts[item] || 0) + 1;
    }
    let total = 0;
    for (const item in counts) {
      const handler = this.itemMap[item];
      if (handler) {
        total += handler.getPrice(counts[item]);
      }
    }
    return parseFloat(total.toFixed(2));
  }
}
