export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    throw new Error(message);
  }
}
