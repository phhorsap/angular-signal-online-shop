import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
private url ='https://swapi.py4e.com/api/vehicles'; 
  private http = inject(HttpClient);
vehicles = signal<Vehicle[]>([]);
  selectedVehicle = signal<Vehicle[] | undefined>(undefined);
  quantity = signal(1);
 // total = computed(()=> (this.selectedVehicle()?.cost?? 0)*this.quantity ());
  //color='';
}
export interface VehicleRes{
  count: number;
  next: string;
  previous: string;
  results: Vehicle[]
}
export interface Vehicle{
name: string;
cost_in_credits: number;
}