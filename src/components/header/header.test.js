import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  test('Header must have src= "./asessts/popshap_logo_tagline_allwhite 1.png" and alt = "Logo"', () => {
    render(<Header/>);
    const header = screen.getByRole('img');
   
    expect(header).toHaveAttribute('src', "popshap_logo_tagline_allwhite 1.png");
    expect(header).toHaveAttribute('alt', 'Logo');
  });
});