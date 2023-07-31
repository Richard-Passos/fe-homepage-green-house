import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('<Icon /> ', () => {
  beforeAll(() => {
    render(<Icon data-testid='test-id' />);
  });

  it('should render properly', () => {
    const element = screen.getByTestId('test-id');

    expect(element).toBeTruthy();
  });
});