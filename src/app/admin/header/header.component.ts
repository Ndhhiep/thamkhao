import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import "firebase/firestore";
import { ServiceService } from './service.service';
import { AdminService } from '../services/admin.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<Item>();

  @Input() user: User | null = {
    id: '',
    name: '',
    email: '',
    avatarUrl: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png',
  };
  constructor(private service: ServiceService, public adminService: AdminService) {}

  
  
  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  openDialog() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

  addItem(value: Item) {
    this.newItemEvent.emit(value);
    console.log(value);
  }

  // addItemToFirebase(value: Item){
  //   this.service.addProduct();

  // }
  ItemForm!: FormGroup;

  showIf(){
    console.log(this.adminService.user);
  }

  ngOnInit(): void {
    this.ItemForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgSrc: new FormControl(
        '',[Validators.required]
      ),
    });
  }
}
