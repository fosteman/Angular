import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100) ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}
