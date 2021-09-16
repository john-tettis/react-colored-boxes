import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
});
test('renders NewBoxForm', () => {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot()
});
