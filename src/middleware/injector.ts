export class Injector {
  private static dependencies = new Map<string, unknown>;

  static register<T>(token: string, instance: T): void {
    this.dependencies.set(token, instance);
  }

  static resolve<T>(token: string): T {
    const dependency = Injector.dependencies.get(token);
    
    if (dependency) {
      return dependency as T;
    }

    throw new Error(`Dependency not found: ${token}`);
  }
}