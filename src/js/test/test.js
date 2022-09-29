import { ErrorRepository } from '../classError';

test('UnknownError', () => {
  const errorClass = new ErrorRepository();
  expect(errorClass.translate(0)).toBe('Unknown error'); /// Проверка неизвестной ошибки
});

test('NumbError', () => {
  const errorClass = new ErrorRepository();
  expect(errorClass.translate(1)).toBe('error001');/// Проверка нумерованной ошибки
});
