import { render, screen } from '@testing-library/react';
import XTwitterIcon from './XTwitterIcon';

describe('XTwitterIcon', () => {
  it('should render without errors', () => {
    render(<XTwitterIcon />);
    const element = screen.getByText('XTwitterIcon');
    expect(element).toBeInTheDocument();
  });
});