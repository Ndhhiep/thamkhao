import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale/sale.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    SaleComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
