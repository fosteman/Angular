// Feature model exposing data model functionality
import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
@NgModule({
  providers: [ProductRepository, StaticDataSource]
})
export class ModelModule { }
