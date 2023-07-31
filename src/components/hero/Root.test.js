import { render, screen } from '@testing-library/react';
import Hero from './Root';

describe('<Hero /> ', () => {
  beforeAll(() => {
    render(<Hero data-testid='test-id' />);
  });

  it('should render properly', () => {
    const element = screen.getByTestId('test-id');

    expect(element).toBeTruthy();
  });
});