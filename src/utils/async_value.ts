export abstract class AsyncValue<T> {
  readonly value?: T;

  static async guard<T>(
    promiseCallback: () => Promise<T>,
    onPromiseUpdate: (value: AsyncValue<T>) => void,
  ) {
    try {
      onPromiseUpdate(AsyncValue.loading());
      const data = await promiseCallback();
      onPromiseUpdate(AsyncValue.data(data));
    } catch (error) {
      onPromiseUpdate(AsyncValue.error(error));
    }
  }

  abstract when<V>(option: {
    data: (value: T) => V;
    loading: () => V;
    error: (error: unknown) => V;
  }): V;

  static loading<T>() {
    return new AsyncLoading<T>();
  }

  static error<T>(error: unknown) {
    return new AsyncError<T>(error);
  }

  static data<T>(value: T) {
    return new AsyncData<T>(value);
  }
}
export class AsyncData<T> implements AsyncValue<T> {
  constructor(readonly value: T) {}

  when<V>(option: {
    data: (value: T) => V;
    loading: () => V;
    error: (error: unknown) => V;
  }): V {
    return option.data(this.value);
  }
}
export class AsyncLoading<T> implements AsyncValue<T> {
  constructor(readonly value?: undefined) {}

  when<V>(option: {
    data: (value: T) => V;
    loading: () => V;
    error: (error: unknown) => V;
  }): V {
    return option.loading();
  }
}
export class AsyncError<T> implements AsyncValue<T> {
  constructor(
    readonly error: unknown,
    readonly value?: undefined,
  ) {}

  when<V>(option: {
    data: (value: T) => V;
    loading: () => V;
    error: (error: unknown) => V;
  }): V {
    return option.error(this.error);
  }
}
