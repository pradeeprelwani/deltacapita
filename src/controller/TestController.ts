export class TestController {
  public calculateBasket(basket: string[]): number | undefined {
    try {

      let appleCount = 0;
      let bananaCount = 0;
      let melonCount = 0;
      let limeCount = 0;
      let total: any = 0;

      for (let i = 0; i < basket.length; i++) {
        const item = basket[i];
        if (item === "Apple") {
          appleCount++;
        }
        else if (item === "Banana") {
          bananaCount++;
        }
        else if (item === "Melon") {
          melonCount++;
        }
        else if (item === "Lime") {
          limeCount++;
        }
      }
      total += appleCount * .35;
      total += bananaCount * .20;
      total += Math.ceil(melonCount / 2) * .50;
      total += (Math.floor(limeCount / 3) * 2 + (limeCount % 3)) * .15;

      return total.toFixed(2);
    } catch (error) {

    }

  }


}