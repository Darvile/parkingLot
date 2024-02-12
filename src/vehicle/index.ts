import { ICreateVehiclFn, IParkingTicket, IVehicle, IVehicleCreator } from "../types";

export class Vehicle implements IVehicle {
  protected licenseNumber: string;
  protected parkingTicket!: IParkingTicket;

  constructor(licenseNumber: string) {
    this.licenseNumber = licenseNumber;
  }

  assignTicket(parklingTicket: IParkingTicket): void {
    this.parkingTicket = parklingTicket;
  }

  getLicenseNumber(): string {
    return this.licenseNumber;
  }

  getParkingTicket(): IParkingTicket {
    return this.parkingTicket;
  }
}

export class Car extends Vehicle {}
export class Truck extends Vehicle {}
export class Electric extends Vehicle {}
export class Van extends Vehicle {}
export class Motorbike extends Vehicle {}



export class VehicleCreator implements IVehicleCreator {
  private createVehicleFn: ICreateVehiclFn;

  constructor(createVehicleFn: ICreateVehiclFn) {
    this.createVehicleFn = createVehicleFn;
  }

  createVehicle(licenseNumber: string): IVehicle {
    return this.createVehicleFn(licenseNumber);
  }
}