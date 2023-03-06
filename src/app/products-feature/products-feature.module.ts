import { NgModule } from '@angular/core';
import { ProductsComponent } from './../products/products.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    SharedModule
  ],
  exports: [ProductsComponent]
})
export class ProductsFeatureModule { }
