import { Injectable } from '@angular/core';
import { Firestore, addDoc} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Item } from '../../models/item.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private firestore: Firestore) {}

  async addProduct(itemForm: FormGroup) {
    const itemCollection = collection(this.firestore, 'item');
    try {
      await addDoc(itemCollection, itemForm);

      console.log('Thêm thành công');
    } catch (error) {
      console.log('false');
    }
  }
}
