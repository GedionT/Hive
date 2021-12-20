import { render } from '@testing-library/react';
import App from '../App';

describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});

describe('render testing dummy tests', () => {
  test('This test should be fixed', () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
