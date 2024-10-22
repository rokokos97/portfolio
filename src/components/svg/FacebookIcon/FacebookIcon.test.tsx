import { render, screen } from '@testing-library/react';
import FacebookIcon from './FacebookIcon';

describe('FacebookIcon', () => {
  it('should render without errors', () => {
    render(<FacebookIcon />);
    const element = screen.getByText('FacebookIcon');
    expect(element).toBeInTheDocument();
  });
});