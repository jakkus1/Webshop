import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {DictionaryModel} from "../model/dictionary.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  public getProductCategoriesDictionary(): Observable<Array<DictionaryModel>> {
    return this.http.get("/api/dictionary/product-categories").pipe(map((response: Array<DictionaryModel>) => {
      return response;
    }));
  }

  public getProductsDictionary(): Observable<Array<DictionaryModel>> {
    return this.http.get("/api/dictionary/products").pipe(map((response: Array<DictionaryModel>) => {
      return response;
    }));
  }

}
