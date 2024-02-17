export interface ILogger {
  log(message: string): void;
  info(message: string): void;
  debug(message: string): void;
  warn(message: string): void;
}

export interface IParkingTicket {
  ticketNumber: string;
}

export interface IVehicle {
  getLicenseNumber(): string;
  getParkingTicket(): IParkingTicket;
  assignTicket(parkingTicket: IParkingTicket): void;
}

export interface IVehicleCreator {
  createVehicle(licenseNumber: string): IVehicle;
}

export interface ICreateVehiclFn {
  (licenseNumber: string): IVehicle;
}

export interface IParkingSpot {
  assignVehicle(vehicle: IVehicle): void;
  removeVehicle(): void;
  getIsFree(): boolean;
  getType(): string;
  getNumber(): string;
}

export interface IParkingSpotCreator {
  createParkingSpot(number: string): IParkingSpot;
}

export interface IParkingSpotFn {
  (number: string): IParkingSpot;
}

export interface IParkingFloor {
  updateDisplayBoard(type: string): void;
  addParkingSpot(parkingSpot: IParkingSpot): void;
  removeParkingSpot(parkingSpot: IParkingSpot): void;
  getParkingSpots(): Map<string, Set<IParkingSpot>>;
}

export interface IParkingLot {
  addEntrancePanel(): boolean;
  addParkingFloor(parkingFloor: IParkingFloor): void;
  removeParkingFloor(parkingFloor: IParkingFloor): void;
  getParkingFloors(): Set<IParkingFloor>;
  getNewParkingTicket(): IParkingTicket;
  isFull(): boolean;
}