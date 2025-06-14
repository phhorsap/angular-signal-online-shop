import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleSelection } from './vehicle-selection/vehicle-selection';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VehicleSelection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'thaishop-online';
}
