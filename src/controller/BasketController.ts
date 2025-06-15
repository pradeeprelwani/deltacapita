import { BasketService } from "../service/BasketService";

export class BasketController {
  private basketService = new BasketService();

  public calculateBasket(basket: string[]): number | undefined {
    try {
      return this.basketService.calculateTotal(basket);
    } catch (error) {
      console.error("Error calculating basket:", error);
      throw error;
    }
  }
}
