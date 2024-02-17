import { ILogger } from "../types";

export class LoggerMock implements ILogger {
  info = jest.fn();
  warn = jest.fn();
  debug = jest.fn();
  log = jest.fn();
  error = jest.fn();
}