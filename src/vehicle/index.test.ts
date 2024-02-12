import { ICreateVehiclFn, IParkingTicket } from '../types';
import {
  Car,
  VehicleCreator,
} from '../vehicle';

describe('parkingLot', () => {
  const carFactory: ICreateVehiclFn = (licenseNumber: string) =>
    new Car(licenseNumber);

  it('should create new car using vehicle factory', () => {
    const mockLicenseNumber = 'car-PLATE';
    const car = new VehicleCreator(carFactory).createVehicle(mockLicenseNumber);

    const mockParkingTicket: IParkingTicket = {
      ticketNumber: 'mockTicketNumber',
    };

    car.assignTicket(mockParkingTicket);
    expect(car.getLicenseNumber()).toBe(mockLicenseNumber);
    expect(car.getParkingTicket()).toBe(mockParkingTicket);
  });
})