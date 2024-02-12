import {
  ParkinLot
} from '.';
import { ParkingFloor } from '../parkingFloor';
import { IParkingTicket } from '../types';

describe('parkingLot', () => {
  it('should create parking lot', () => {
    // const mockParkingTicket: IParkingTicket = {
    //   ticketNumber: 'mockParkingTicketNumber'
    // }

    const mockParkingFloor = new ParkingFloor('mockParkingFloor')
    const mockParkingLotAddress = 'mockParkingLotAddress';

    const parkinglot = new ParkinLot('1', mockParkingLotAddress);
    parkinglot.addParkingFloor(mockParkingFloor);

    expect(parkinglot.getParkingFloors().has(mockParkingFloor)).toBe(true);
    expect(parkinglot.getParkingFloors().size).toBe(1);

    parkinglot.removeParkingFloor(mockParkingFloor);
    expect(parkinglot.getParkingFloors().has(mockParkingFloor)).toBe(false);
    expect(parkinglot.getParkingFloors().size).toBe(0);

    expect(parkinglot.isFull()).toBeFalsy();
    // expect(parkinglot.getNewParkingTicket()).tobe(mockParkingTicket);
  })
});
