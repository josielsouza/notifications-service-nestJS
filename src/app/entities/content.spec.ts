import { Content } from './content';

test('it should be able to create notification content', () => {
  const content = new Content('Você recebeu uma solicitação de amizade');

  expect(content).toBeTruthy();
});

test('it should not be able to create notification content width less than 5 characters', () => {
  expect(() => new Content('aaa')).toThrow();
});

test('it should not be able to create notification content width more than 240 characters', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});
