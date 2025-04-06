import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any|[]; // Dữ liệu sản phẩm được truyền vào
  @Output() addToCart = new EventEmitter<any>(); // Sự kiện khi thêm sản phẩm vào giỏ hàng

  onAddToCart() {
    this.addToCart.emit(this.product); // Gửi sản phẩm tới component cha
  }
}
