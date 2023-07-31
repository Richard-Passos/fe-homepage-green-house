import { render, screen } from '@testing-library/react';
import Toast from './Root';

describe('<Toast /> ', () => {
  beforeAll(() => {
    render(<Toast data-testid='test-id' />);
  });

  it('should render properly', () => {
    const element = screen.getByTestId('test-id');

    expect(element).toBeTruthy();
  });
});