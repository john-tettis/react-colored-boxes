import { render, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm', () => {
  render(<NewBoxForm />);
});

test('renders NewBoxForm', () => {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot()
  });
