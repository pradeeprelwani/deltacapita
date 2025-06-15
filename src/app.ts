import express, { Request, Response } from 'express';
import { BasketController } from './controller/BasketController';
const app = express();
const port = process.env.PORT || 3000;

app.get('/test', (_req: Request, res: Response) => {
  const controller = new BasketController()
  const shoppingBasket1: string[] = ["Apple", "Apple", "Banana", "Melon", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];
  const shoppingBasket2: string[] = ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime", "Lime"];
  const shoppingBasket3: string[] = ["Apple", "Apple", "Apple", "Banana", "Banana", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];
  res.json({
    shoppingBasket1: controller.calculateBasket(shoppingBasket1),
    shoppingBasket2: controller.calculateBasket(shoppingBasket2),
    shoppingBasket3: controller.calculateBasket(shoppingBasket3),
  })
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});