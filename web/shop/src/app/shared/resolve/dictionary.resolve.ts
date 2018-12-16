import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ProductService} from "../service/product.service";
import {ProductCategoryService} from "../service/product-category.service";
import {DictionaryService} from "../service/dictionary.service";

@Injectable()
export class ProductCategoryDictionaryResolve implements Resolve<any> {

  constructor(private dictionaryService: DictionaryService) {}

  resolve() {
    return this.dictionaryService.getProductCategoriesDictionary();
  }
}

@Injectable()
export class ProductDictionaryResolve implements Resolve<any> {

  constructor(private dictionaryService: DictionaryService) {}

  resolve() {
    return this.dictionaryService.getProductsDictionary();
  }
}
