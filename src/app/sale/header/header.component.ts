import { Component } from '@angular/core';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (public saleService: SaleService) {}
}
