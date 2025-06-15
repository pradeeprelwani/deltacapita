import { BasketController } from '../src/controller/BasketController';

describe('BasketController', () => {
  let basketController: BasketController;

  beforeEach(() => {
    basketController = new BasketController();
  });

  it('should calculate total for apples and bananas correctly', () => {
    const basket = ['Apple', 'Apple', 'Banana'];
    const total = basketController.calculateBasket(basket);
    expect(total).toBeCloseTo(0.90); // 0.35 + 0.35 + 0.20
  });

  it('should apply melon offer (BOGOF)', () => {
    const basket = ['Melon', 'Melon', 'Melon'];
    const total = basketController.calculateBasket(basket);
    expect(total).toBeCloseTo(1.00); // 2 melons for 1.00 (BOGOF) + 1 melon for 0.50
  });

  it('should apply lime offer (3 for price of 2)', () => {
    const basket = ['Lime', 'Lime', 'Lime'];
    const total = basketController.calculateBasket(basket);
    expect(total).toBeCloseTo(0.30); // Pay for 2 out of 3
  });

  it('should return 0 for empty basket', () => {
    const basket: string[] = [];
    const total = basketController.calculateBasket(basket);
    expect(total).toBe(0);
  });

  it('should ignore unknown items', () => {
    const basket = ['Apple', 'UnknownFruit'];
    const total = basketController.calculateBasket(basket);
    expect(total).toBeCloseTo(0.35); // Only valid Apple is counted
  });
});
