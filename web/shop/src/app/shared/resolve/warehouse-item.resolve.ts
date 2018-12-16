import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ProductService} from "../service/product.service";
import {WarehouseItemService} from "../service/warehouse-item.service";

@Injectable()
export class WarehouseItemsResolve implements Resolve<any> {

  constructor(private warehouseItemService: WarehouseItemService) {}

  resolve() {
    return this.warehouseItemService.getWarehouseItems();
  }
}

@Injectable()
export class WarehouseItemResolve implements Resolve<any> {

  constructor(private warehouseItemService: WarehouseItemService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.warehouseItemService.getWarehouseItem(route.params['id']);
  }
}
