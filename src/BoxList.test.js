import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders BoxList', () => {
  render(<BoxList />);
});
test('renders NewBoxForm', () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot()
  });



test('Can add Square',()=>{
    const {queryByTestId, getByText, getByTestId} = render(<BoxList />);
    let button = getByText('Add Square')
    expect(queryByTestId('box-element')).not.toBeInTheDocument();
    fireEvent.click(button)
    expect(queryByTestId('box-element')).toBeInTheDocument();
})