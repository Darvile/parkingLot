import { IParkingLot, IParkingFloor, IParkingTicket } from "../types";

export class ParkinLot implements IParkingLot {
  private full = false;
  private parkingFloors = new Set<IParkingFloor>;
  private id!: string;
  private address!: string;

  constructor(id: string, address: string) {
    this.id = id;
    this.address = address;
  }

  addEntrancePanel(): boolean {
    return true;
  }
  addParkingFloor(parkingFloor: IParkingFloor): void {
    if(!this.parkingFloors.has(parkingFloor)) {
      this.parkingFloors.add(parkingFloor);
      return;
    }

    throw new Error('Parking floor already registered');
  }
  removeParkingFloor(parkingFloor: IParkingFloor): void {
    if(this.parkingFloors.has(parkingFloor)) {
      this.parkingFloors.delete(parkingFloor);
      return;
    }

    throw new Error('Parking floor is not registered');
  }
  getNewParkingTicket(): IParkingTicket {
    const pkt = {} as IParkingTicket;
    return pkt;
  }
  isFull(): boolean {
    return this.full;
  }
  getParkingFloors(): Set<IParkingFloor> {
    return this.parkingFloors;
  }
}
