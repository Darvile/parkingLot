import { CompactSpot, ParkingSpotCreator } from ".";
import { ICreateVehiclFn, IParkingSpot, IParkingSpotFn } from "../types";
import { Car, VehicleCreator } from "../vehicle";

describe('parkingSpot', () => {
    const carFactory: ICreateVehiclFn = (licenseNumber: string) =>
    new Car(licenseNumber);
    const compactSpotFactory: IParkingSpotFn = (number: string) =>
    new CompactSpot(number);
    
    it('should create a parking spot', () => {
    const mockParkingSpotNumber = 'mockParkingSpotNumber';
    const parkingSpot = new ParkingSpotCreator(compactSpotFactory);
    const compactParkingSpot = parkingSpot.createParkingSpot(
      mockParkingSpotNumber,
    );

    expect(compactParkingSpot.getIsFree()).toBeTruthy();
  });

  it('should assign vehicle to parking spot', () => {
    const mockLicenseNumber = 'mockLicenseNumber';
    const carCreator = new VehicleCreator(carFactory);
    const car = carCreator.createVehicle(mockLicenseNumber);

    const mockParkingSpotNumber = 'mockParkingSpotNumber';
    const parkingSpot: IParkingSpot = new ParkingSpotCreator(
      compactSpotFactory,
    ).createParkingSpot(mockParkingSpotNumber);

    parkingSpot.assignVehicle(car);
    expect(parkingSpot.getIsFree()).toBeFalsy();

    parkingSpot.removeVehicle();
    expect(parkingSpot.getIsFree()).toBeTruthy();
  });
})