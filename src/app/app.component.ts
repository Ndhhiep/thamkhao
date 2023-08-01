import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'KFC_ng';

  itemForm!: FormGroup;

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgSrc: new FormControl(
        'http://code.slicecrowd.com/labs/4/images/t-shirt.png'
      ),
    });
  }

  itemList: Item[] = [
    {
      id: Date.now(),
      name: 'Gà cuộn',
      price: 39,
      description: '01 Gà cuộn',
      imgSrc: 'https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=46kA9g',
    },
  ];

  addItem(newItem: Item) {
    this.itemList.push(newItem);
    // console.log(newItem);
  }
  delete(value: number) {
    const index = this.itemList.findIndex(item => item.id == value);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }
  
}
