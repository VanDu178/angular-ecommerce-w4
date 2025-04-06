// src/app/pages/auth/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service'; // Đảm bảo AuthService đã được import
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // 👈 PHẢI CÓ
import { FormsModule } from '@angular/forms'; // Import FormsModule nếu cần thiết cho form

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Đưa CommonModule và RouterModule vào importss
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; // Khai báo email
  password: string = ''; // Khai báo password

  constructor(private authService: AuthService, private router: Router) {}

  // Hàm xử lý đăng nhập
  onSubmit() {
    // Kiểm tra tài khoản (có thể thay bằng logic thực tế như API)
    if (this.email === 'phamvandu77tphcm@gmail.com' && this.password === '123') {
      this.authService.login(); // Giả lập đăng nhập
      alert('Đăng nhập thành công!');
      this.router.navigate(['/']); // Chuyển hướng về trang chủ
    } else {
      alert('Email hoặc mật khẩu sai!');
    }
  }
}
