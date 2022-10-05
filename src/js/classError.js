export class ErrorRepository {
  constructor() {
    /// Определить контейнер с данными
    this.errors = new Map([[1, 'error001'], [2, 'error002'], [3, 'error003'], [4, 'error004'], [5, 'error005']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
