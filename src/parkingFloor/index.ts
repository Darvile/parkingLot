/* eslint-disable @typescript-eslint/no-empty-function */
import { IParkingDisplayBoard } from "../parkingDisplayBoard";
import { IParkingFloor, IParkingSpot } from "../types";

export class ParkingFloor implements IParkingFloor {
  name!: string;
  parkingSpots: Map<string, Set<IParkingSpot>> = new Map();
  parkingDisplayBoard!: IParkingDisplayBoard;

  constructor(name: string, parkingDisplayBoard: IParkingDisplayBoard) {
    this.name = name;
    this.parkingDisplayBoard = parkingDisplayBoard;
  }

  updateDisplayBoard(type: string): void {
    const selectedParkingSpots = Array.from(this.parkingSpots.get(type)?.values() || []);
    this.parkingDisplayBoard.freeSpot(type, selectedParkingSpots.find(pk => pk.getIsFree()));
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
  removeParkingSpot(parkingSpot: IParkingSpot): void {
    const pkSpot = this.parkingSpots.get(parkingSpot.getType())

    if (pkSpot) {
      pkSpot.delete(parkingSpot);
    }
  }
  getParkingSpots(): Map<string, Set<IParkingSpot>> {
    return this.parkingSpots;
  }
}