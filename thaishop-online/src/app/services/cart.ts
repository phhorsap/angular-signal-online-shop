import { computed, inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../shared/cart';
import { HttpClient } from '@angular/common/http';

export interface VehicleRes{
  count: number;
  next: string;
  previous: string;
  results: Vehicle[]
}
export interface Vehicle{
name: string;
cost: number;
}

@Injectable({
  providedIn: 'root'
})
export class Cart {
  private url ='https://swapi.py4e.com/api/vehicles'; 
  private http = inject(HttpClient);

  vehicles = signal<Vehicle[]>([]);
  selectedVehicle = signal<Vehicle[] | undefined>(undefined);
  quantity = signal(1);
 // total = computed(()=> (this.selectedVehicle()?.cost?? 0)*this.quantity ());
  //color='';





//manage stat with signal
cardItems =signal<CartItem[]>([]);

//add the product to the cart
addToCart(){
  
}

//remove product from the cart

// update product in the cart
}
