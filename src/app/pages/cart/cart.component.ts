import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Import CartService
import { CartItemComponent } from '../../shared/cart-item/cart-item.component'; // Import CartItemComponent
import { CommonModule } from '@angular/common'; // Import CommonModule nếu cần

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CartItemComponent,CommonModule] // Đưa CartItemComponent vào imports
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
    console.log("du lieu gio hang",this.cartItems);
  }
}
