import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/service/product.service";
import {ProductCategoryModel} from "../../shared/model/product-category.model";
import {ProductModel} from "../../shared/model/product.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: ProductModel = new ProductModel();
  categoriesDict: Array<ProductCategoryModel> = [];

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private location: Location) { }

  ngOnInit() {
    if (this.route.snapshot.data['product']) {
      this.product = this.route.snapshot.data['product'];
    }
    this.categoriesDict = this.route.snapshot.data['categoriesDict'];
  }

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

}
