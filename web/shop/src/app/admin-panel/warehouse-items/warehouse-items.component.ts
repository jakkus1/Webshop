import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WarehouseItemModel} from "../../shared/model/warehouse-item.model";
import {WarehouseItemService} from "../../shared/service/warehouse-item.service";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.css']
})
export class WarehouseItemsComponent implements OnInit {

  warehouseItems: Array<WarehouseItemModel> = [];

  constructor(private route: ActivatedRoute,
              private warehouseItemService: WarehouseItemService) { }

  ngOnInit() {
    this.warehouseItems = this.route.snapshot.data['warehouseItems'];
    console.log(this.warehouseItems);
  }

  removeWarehouseItem(warehouseItemId: number, index: number) {
    this.warehouseItemService.removeWarehouseItem(warehouseItemId).subscribe(() => {
      this.warehouseItems.splice(index, 1);
    });
  }

}
