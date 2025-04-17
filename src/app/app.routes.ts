import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import {LoginComponent} from './pages/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Trang chủ mặc định
    title: 'Trang Chủ - Rau Củ Quả'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Giỏ Hàng',
    canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Đăng nhập / Đăng ký'
  },
  {
    path: '**',
    redirectTo: '' // Redirect các route không tồn tại về trang chủ
  }
];
