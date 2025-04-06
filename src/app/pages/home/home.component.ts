import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Import CartService
import { ProductItemComponent } from '../../shared/product-item/product-item.component'; // Import ProductItemComponent
import { CommonModule } from '@angular/common'; // Import CommonModuless
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ProductItemComponent, CommonModule] // Đưa ProductItemComponent vào imports
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Cà Rốt',
      description: 'Cà rốt tươi, ngọt và giòn, giàu vitamin A.',
      price: 1.99,
      image: 'https://product.hstatic.net/200000423303/product/ca-rot-huu-co_051657cb99144443bac8015f6dd34dae_1024x1024.jpg',
      stock: 0
    },
    {
      id: 2,
      name: 'Khoai Tây',
      description: 'Khoai tây tươi ngon, phù hợp cho nhiều món ăn.',
      price: 2.49,
      image: 'https://cdn.medigoapp.com/product/tac_dung_cua_khoai_tay_la_gi_d70d70a8c1.jpg',
      stock: 5
    },
    {
      id: 3,
      name: 'Bí Đỏ',
      description: 'Bí đỏ tươi, ngọt mát và dễ chế biến.',
      price: 3.99,
      image: 'https://www.vinaorganic.com/wp-content/uploads/2016/07/cong-dung-cua-bi-do.jpg'
      , stock: 5
    },
    {
      id: 4,
      name: 'Cải Xoăn',
      description: 'Cải xoăn tươi ngon, giàu chất xơ và vitamin.',
      price: 4.29,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GOxL5rO_mEjNsSJitndr2LqD5MNCmIM63g&s'
      , stock: 5
    },
    {
      id: 5,
      name: 'Cà Rốt',
      description: 'Cà rốt tươi, ngọt và giòn, giàu vitamin A.',
      price: 1.99,
      image: 'https://product.hstatic.net/200000423303/product/ca-rot-huu-co_051657cb99144443bac8015f6dd34dae_1024x1024.jpg',
      stock: 5
    },
    {
      id: 6,
      name: 'Khoai Tây',
      description: 'Khoai tây tươi ngon, phù hợp cho nhiều món ăn.',
      price: 2.49,
      image: 'https://cdn.medigoapp.com/product/tac_dung_cua_khoai_tay_la_gi_d70d70a8c1.jpg',
      stock: 5
    },
    {
      id: 7,
      name: 'Bí Đỏ',
      description: 'Bí đỏ tươi, ngọt mát và dễ chế biến.',
      price: 3.99,
      image: 'https://www.vinaorganic.com/wp-content/uploads/2016/07/cong-dung-cua-bi-do.jpg',
      stock: 5
    },
    {
      id: 8,
      name: 'Cải Xoăn',
      description: 'Cải xoăn tươi ngon, giàu chất xơ và vitamin.',
      price: 4.29,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GOxL5rO_mEjNsSJitndr2LqD5MNCmIM63g&s',
      stock: 5
    },
    {
      id: 9,
      name: 'Bí Đỏ',
      description: 'Bí đỏ tươi, ngọt mát và dễ chế biến.',
      price: 3.99,
      image: 'https://www.vinaorganic.com/wp-content/uploads/2016/07/cong-dung-cua-bi-do.jpg',
      stock: 5
    },
    {
      id: 10,
      name: 'Cải Xoăn',
      description: 'Cải xoăn tươi ngon, giàu chất xơ và vitamin.',
      price: 4.29,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GOxL5rO_mEjNsSJitndr2LqD5MNCmIM63g&s',
      stock: 5
    }
  ];
  constructor(private cartService: CartService,private authService: AuthService) {}

  // Phương thức nhận sự kiện thêm sản phẩm vào giỏ hàng từ ProductItemComponent
  onAddToCart(product: any) {
    if (this.authService.isLoggedIn()) {
      this.cartService.addToCart(product);
    } else {
      alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!');
    }
  }
}
