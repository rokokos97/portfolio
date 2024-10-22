import { render, screen } from '@testing-library/react';
import EmailIcon from './EmailIcon';

describe('EmailIcon', () => {
  it('should render without errors', () => {
    render(<EmailIcon />);
    const element = screen.getByText('EmailIcon');
    expect(element).toBeInTheDocument();
  });
});