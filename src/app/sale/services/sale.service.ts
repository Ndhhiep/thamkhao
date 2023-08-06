import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private router: Router) {}

  async logIn() {
    return await this.router.navigate(['/login']);
  }
}
