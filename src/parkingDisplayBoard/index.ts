import { Injector } from "../middleware/injector";
import { ILogger, IParkingSpot } from "../types";

export interface IParkingDisplayBoard {
  freeSpot(type: string, parkingSpots?: IParkingSpot): void;
  showEmptySpotNumber(type: string): string | undefined;
}

export class ParkingDisplayBoard implements IParkingDisplayBoard {
  private freeSpots: Record<string, IParkingSpot | null> = {};
  private id!: string;
  private logger!: ILogger;

  constructor(id: string) {
    this.id = id;
    this.logger = Injector.resolve<ILogger>('ILogger');
  }
  
  showEmptySpotNumber(type: string): string | undefined {
    const freeSpot = this.freeSpots[type]?.getNumber();
    let message: string;

    if(freeSpot) {
      message = `${type} is available`;
    } else {
      message = `No ${type} spot available`;
    }

    this.logger.info(message);
    return freeSpot || undefined;
  }

  freeSpot(type: string, parkingSpot?: IParkingSpot): void {
    if (parkingSpot) {
      this.freeSpots[type] = parkingSpot;
    } else {
      this.freeSpots[type] = null;
    }
  }
}