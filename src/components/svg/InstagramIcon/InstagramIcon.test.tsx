import { render, screen } from '@testing-library/react';
import InstagramIcon from './InstagramIcon';

describe('InstagramIcon', () => {
  it('should render without errors', () => {
    render(<InstagramIcon />);
    const element = screen.getByText('InstagramIcon');
    expect(element).toBeInTheDocument();
  });
});