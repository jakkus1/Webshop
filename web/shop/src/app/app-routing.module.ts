import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {ProductsComponent} from "./admin-panel/products/products.component";
import {ProductCategoriesComponent} from "./admin-panel/product-categories/product-categories.component";
import {EditProductCategoryComponent} from "./admin-panel/edit-product-category/edit-product-category.component";
import {EditProductComponent} from "./admin-panel/edit-product/edit-product.component";
import {OrdersComponent} from "./admin-panel/orders/orders.component";
import {WarehouseItemsComponent} from "./admin-panel/warehouse-items/warehouse-items.component";
import {ProductCategoriesResolve, ProductCategoryResolve} from "./shared/resolve/product-category.resolve";
import {ProductResolve, ProductsResolve} from "./shared/resolve/product.resolve";
import {ProductCategoryDictionaryResolve, ProductDictionaryResolve} from "./shared/resolve/dictionary.resolve";
import {WarehouseItemResolve, WarehouseItemsResolve} from "./shared/resolve/warehouse-item.resolve";
import {EditWarehouseItemComponent} from "./admin-panel/edit-warehouse-item/edit-warehouse-item.component";
import {LoginComponent} from "./login/login.component";
import {AdminGuard} from "./shared/guard/admin.guard";
import {GuestGuard} from "./shared/guard/guest.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'prefix'
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'warehouse-items',
        component: WarehouseItemsComponent,
        resolve: {
          warehouseItems: WarehouseItemsResolve
        }
      },
      {
        path: 'warehouse-items/add',
        component: EditWarehouseItemComponent,
        resolve: {
          productsDict: ProductDictionaryResolve
        }
      },
      {
        path: 'warehouse-items/edit/:id',
        component: EditWarehouseItemComponent,
        resolve: {
          warehouseItem: WarehouseItemResolve,
          productsDict: ProductDictionaryResolve
        }
      },
      {
        path: 'products',
        component: ProductsComponent,
        resolve: {
          products: ProductsResolve
        }
      },
      {
        path: 'products/add',
        component: EditProductComponent,
        resolve: {
          categoriesDict: ProductCategoryDictionaryResolve
        }
      },
      {
        path: 'products/edit/:id',
        component: EditProductComponent,
        resolve: {
          product: ProductResolve,
          categoriesDict: ProductCategoryDictionaryResolve
        }
      },
      {
        path: 'product-categories',
        component: ProductCategoriesComponent,
        resolve: {
          productCategories: ProductCategoriesResolve
        }
      },
      {
        path: 'product-categories/add',
        component: EditProductCategoryComponent
      },
      {
        path: 'product-categories/edit/:id',
        component: EditProductCategoryComponent,
        resolve: {
          productCategory: ProductCategoryResolve
        }
      },
      {
        path: '**',
        redirectTo: 'products',
        pathMatch: 'prefix'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
