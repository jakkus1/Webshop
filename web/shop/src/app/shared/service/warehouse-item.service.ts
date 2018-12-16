import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {map, startWith} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/internal/Subject";
import {WarehouseItemModel} from "../model/warehouse-item.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseItemService {

  private warehouseItems: Array<WarehouseItemModel> = [];
  private warehouseItemsStream: Subject<Array<WarehouseItemModel>> = new Subject();

  constructor(private http: HttpClient) { }

  public getWarehouseItems(): Observable<Array<WarehouseItemModel>> {
    return this.http.get("/api/warehouse-items/open").pipe(map((response: Array<WarehouseItemModel>) => {
      this.warehouseItems = response;
      this.warehouseItemsStream.next(this.warehouseItems);
      return this.warehouseItems;
    }));
  }

  public getWarehouseItem(id: number): Observable<WarehouseItemModel> {
    return this.http.get("/api/warehouse-items/open/" + id).pipe(map((response: WarehouseItemModel) => {
      return response;
    }));
  }

  public getWarehouseItemsStream(): Observable<Array<WarehouseItemModel>> {
    return this.warehouseItemsStream.pipe(startWith(this.warehouseItems));
  }

  public removeWarehouseItem(id: number) {
    return this.http.delete("/api/warehouse-items/" + id);
  }

  public saveWarehouseItem(warehouseItem: WarehouseItemModel): Observable<WarehouseItemModel> {
    if (warehouseItem.id) {
      return this.http.put("/api/warehouse-items/" + warehouseItem.id, warehouseItem).pipe(map((response: WarehouseItemModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/warehouse-items", warehouseItem).pipe(map((response: WarehouseItemModel) => {
        return response;
      }));
    }
  }

}
