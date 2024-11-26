import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {
  private noReservers = 0; // Counter for reservations
  private reserves: any[] = []; // Array to store user data

  constructor() { }

  // Method to add user data and increment the counter
  addReserve(userData: any) {
    this.reserves.push(userData);
    this.noReservers++;
  }

  // Method to get the current number of reserves
  getReserveCount(): number {
    return this.noReservers;
  }

  // Method to get all reserves
  getAllReserves(): any[] {
    return this.reserves;
  }
}
