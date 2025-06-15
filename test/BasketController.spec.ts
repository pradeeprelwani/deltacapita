import { BasketController } from '../src/controller/BasketController';

describe('BasketController', () => {
  let basketController: BasketController;

  beforeEach(() => {
    basketController = new BasketController();
  });

  it('should calculate total for apples and bananas correctly', () => {
    const basket = ['Apple', 'Apple', 'Banana'];
    const total = basketController.calculateBasket(basket);
    expect(total).toBeCloseTo(0.90);
  });

  it('should apply melon offer (BOGOF)', () => {
    const basket = ['Melon', 'Melon', 'Melon'];
    const total = basketController.calculateBasket(basket);
    expect(total).toBeCloseTo(1.00);
  });

  it('should apply lime offer (3 for price of 2)', () => {
    const basket = ['Lime', 'Lime', 'Lime'];
    const total = basketController.calculateBasket(basket);
    expect(total).toBeCloseTo(0.30);
  });

  it('should return 0 for empty basket', () => {
    const basket: string[] = [];
    const total = basketController.calculateBasket(basket);
    expect(total).toBe(0);
  });

  it('should ignore unknown items', () => {
    const basket = ['Apple', 'UnknownFruit'];
    const total = basketController.calculateBasket(basket);
    expect(total).toBeCloseTo(0.35);
  });
});
