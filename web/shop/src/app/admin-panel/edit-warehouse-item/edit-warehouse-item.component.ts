import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../../shared/model/product.model";
import {Location} from "@angular/common";
import {WarehouseItemModel} from "../../shared/model/warehouse-item.model";
import {WarehouseItemService} from "../../shared/service/warehouse-item.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-warehouse-item.component.html',
  styleUrls: ['./edit-warehouse-item.component.css']
})
export class EditWarehouseItemComponent implements OnInit {

  warehouseItem: WarehouseItemModel = new WarehouseItemModel();
  productsDict: Array<ProductModel> = [];

  constructor(private route: ActivatedRoute,
              private warehouseItemService: WarehouseItemService,
              private location: Location) { }

  ngOnInit() {
    if (this.route.snapshot.data['warehouseItem']) {
      this.warehouseItem = this.route.snapshot.data['warehouseItem'];
    }
    this.productsDict = this.route.snapshot.data['productsDict'];
  }

  saveWarehouseItem() {
    this.warehouseItemService.saveWarehouseItem(this.warehouseItem).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

}
