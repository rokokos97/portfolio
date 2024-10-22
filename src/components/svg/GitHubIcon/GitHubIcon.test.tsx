import { render, screen } from '@testing-library/react';
import GitHubIcon from './GitHubIcon';

describe('GitHubIcon', () => {
  it('should render without errors', () => {
    render(<GitHubIcon />);
    const element = screen.getByText('GitHubIcon');
    expect(element).toBeInTheDocument();
  });
});