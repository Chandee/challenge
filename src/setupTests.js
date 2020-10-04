// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

const localStorageMock = {
  getItem: jest.fn(
    () =>
      '[{"id":1017100,"name":"A-Bomb (HAS)","thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16","extension":"jpg"}},{"id":1009149,"name":"Abyss","thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64","extension":"jpg"}},{"id":1009148,"name":"Absorbing Man","thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7","extension":"jpg"}}]'
  ),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
