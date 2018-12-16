import {ProductModel} from "./product.model";

export class WarehouseItemModel {
  id: number = null;
  price: number = null;
  quantity: number = null;
  product: ProductModel = new ProductModel();
}
