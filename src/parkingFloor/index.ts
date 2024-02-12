/* eslint-disable @typescript-eslint/no-empty-function */
import { IParkingFloor, IParkingSpot, IVehicle } from "../types";

export class ParkingFloor implements IParkingFloor {
  name!: string;
  parkingSpots: Map<string, Set<IParkingSpot>> = new Map();

  constructor(name: string) {
    this.name = name;
  }

  updateDisplayBoard(): void {
    console.log('Displaying Board');
  }
  addParkingSpot(parkingSpot: IParkingSpot): void {
    const pkSpot = this.parkingSpots.get(parkingSpot.getType());
    if (pkSpot) {
      pkSpot.add(parkingSpot);
    } else {
      this.parkingSpots.set(
        parkingSpot.getType(),
        new Set<IParkingSpot>().add(parkingSpot),
      );
    }
  }
  removeParkingSpot(parkingSpot: IParkingSpot): void {}
  assignVehicleToSpot(vehicle: IVehicle): void {}
  getParkingSpots(): Map<string, Set<IParkingSpot>> {
    return this.parkingSpots;
  }
}