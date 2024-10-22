import { render, screen } from '@testing-library/react';
import TelegramIcon from './TelegramIcon';

describe('TelegramIcon', () => {
  it('should render without errors', () => {
    render(<TelegramIcon />);
    const element = screen.getByText('TelegramIcon');
    expect(element).toBeInTheDocument();
  });
});