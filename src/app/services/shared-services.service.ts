import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
  private editInfoSource = new BehaviorSubject<boolean>(false);
  private purchasesUserSource = new BehaviorSubject<boolean>(false);
  private purchasesProductSource = new BehaviorSubject<boolean>(false);
  private productDetailsSource = new BehaviorSubject<boolean>(false);

  editInfo$ = this.editInfoSource.asObservable();
  purchasesUser$ = this.purchasesUserSource.asObservable();
  purchasesProduct$ = this.purchasesProductSource.asObservable();
  productDetails$ = this.productDetailsSource.asObservable();


  setEditInfo(value: boolean) {
    this.editInfoSource.next(value);
  }

  setPurchasesUser(value: boolean) {
    this.purchasesUserSource.next(value);
  }

  setPurchasesProduct(value: boolean) {
    this.purchasesProductSource.next(value);
  }

  setproductDetails(value: boolean) {
    this.productDetailsSource.next(value);
  }
}
