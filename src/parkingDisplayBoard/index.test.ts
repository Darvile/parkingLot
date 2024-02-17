/* eslint-disable @typescript-eslint/no-unused-vars */
import { IParkingDisplayBoard, ParkingDisplayBoard } from "."
import { Injector } from "../middleware/injector";
import { LoggerMock } from "../mocks/LoggerMock";
import { ILogger, IParkingSpot } from "../types"

describe('parkingDisplayBoard', () => {
  let parkingDisplayBoard: IParkingDisplayBoard;
  let mockParkingSpot: IParkingSpot;

  beforeAll(() => {
    Injector.register<ILogger>('ILogger', new LoggerMock());
  });

  it('should show free parking spot based on spot type', () => {
    const logger = Injector.resolve<ILogger>('ILogger') as LoggerMock;

    const mockSpotNumber = '20';
    mockParkingSpot = {
      assignVehicle: jest.fn(),
      removeVehicle: jest.fn(),
      getIsFree: jest.fn(),
      getType: jest.fn(),
      getNumber: jest.fn().mockReturnValue(mockSpotNumber)
    }

    parkingDisplayBoard = new ParkingDisplayBoard('1');
    parkingDisplayBoard.freeSpot('compactSpot', mockParkingSpot);
    // expect(parkingDisplayBoard.showEmptySpotNumber(mockSpotNumber)).toBe(mockSpotNumber);
    expect(logger.info).toBeCalledWith('No compactSpot spot available');
  })
})