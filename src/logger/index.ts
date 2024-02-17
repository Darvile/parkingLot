import { ILogger } from "../types";

export class Logger implements ILogger {
  log = (message: string): void => console.log(message)
  debug = (message: string): void => console.log(message);
  info = (message: string): void => console.info(message);
  warn = (message: string): void => console.warn(message);
}