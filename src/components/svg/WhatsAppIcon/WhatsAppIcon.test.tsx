import { render, screen } from '@testing-library/react';
import WhatsAppIcon from './WhatsAppIcon';

describe('WhatsAppIcon', () => {
  it('should render without errors', () => {
    render(<WhatsAppIcon />);
    const element = screen.getByText('WhatsAppIcon');
    expect(element).toBeInTheDocument();
  });
});