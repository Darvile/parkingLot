import { IParkingSpot, IParkingSpotCreator, IParkingSpotFn, IVehicle } from "../types";

export class ParkingSpot implements IParkingSpot {
  protected type!: string;
  protected number!: string;
  private free = true;
  private vehicle!: IVehicle | null;

  constructor(number: string, type: string) {
    this.number = number;
    this.type = type;
  }

  assignVehicle(vehicle: IVehicle): void {
    if (this.free) {
      this.vehicle = vehicle;
      this.free = false;
      return;
    }

    throw new Error('Parking spot not available');
  }

  removeVehicle(): void {
    if (!this.free) {
      this.vehicle = null;
      this.free = true;
      return;
    }

    throw new Error('Parking spot is empty');
  }

  getIsFree(): boolean {
    return this.free;
  }
  getType(): string {
    return this.type;
  }
}

export class ParkingSpotCreator implements IParkingSpotCreator {
  private createParkingSpotFn: IParkingSpotFn;

  constructor(createParkingSpotFn: IParkingSpotFn) {
    this.createParkingSpotFn = createParkingSpotFn;
  }

  createParkingSpot(number: string): IParkingSpot {
    return this.createParkingSpotFn(number);
  }
}

export class LargeSpot extends ParkingSpot {}

export class CompactSpot extends ParkingSpot {
  constructor(number: string) {
    super(number, 'compactSpot');
  }
}

export class ElectricSpot extends ParkingSpot {}
export class MotorbikeSpot extends ParkingSpot {}
export class HandicappedStop extends ParkingSpot {}