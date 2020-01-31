import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value = 9;
  productToUpdate: any;
  changeCount(data) {
    console.log(data);
  }

  changeStockValue(p) {
    this.productToUpdate = this.products.find(this.findProducts, [p.id])
    this.productToUpdate.stock = this.productToUpdate.stock + p.updatedStockValue;
  }
  findProducts(p) {
    return p.id === this[0]
  }
  products = [];
  ngOnInit() {
    this.products = this.getProducts();
  }
  getProducts() {
    return [
      { 'id': '1', 'title': 'Sacrea Driver', 'price': 400, 'stock': 11 },
      { 'id': '2', 'title': 'Null HH', 'price': 300, 'stock': 4 },
      { 'id': '3', 'title': 'JHHJGHGH', 'price': 3400, 'stock': 51 },
      { 'id': '4', 'title': 'RANSDOM', 'price': 4030, 'stock': 8 },
    ]
  }
}
