import { Logger } from "./logger";
import { Injector } from "./middleware/injector";
import { IParkingDisplayBoard, ParkingDisplayBoard } from "./parkingDisplayBoard";

Injector.register('ILogger', new Logger());
const parkingDisplayBoard: IParkingDisplayBoard = new ParkingDisplayBoard('1');
parkingDisplayBoard.showEmptySpotNumber('compactSpot');
console.log(parkingDisplayBoard);
