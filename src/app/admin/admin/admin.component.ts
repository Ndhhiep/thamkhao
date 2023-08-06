import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(public adminService: AdminService, public router: Router) { 
    this.adminService.user.subscribe((user) => {
      if (user == null) {
        this.router.navigate(['/sale']);
      }
    });
  }
}
