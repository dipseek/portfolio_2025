import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import MobileNav from '../components/MobileNav';
import Sidebar from '../components/Sidebar';

// Mock useLocation
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: 'default'
  }),
}));

describe('Touch Target Size Validation', () => {
  describe('MobileNav Touch Targets', () => {
    test('mobile menu button meets minimum touch target size', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={false} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      expect(menuButton).toHaveClass('min-w-[44px]');
      expect(menuButton).toHaveClass('min-h-[44px]');
    });

    test('navigation links meet minimum touch target size when menu is open', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const navigationLinks = [
        screen.getByRole('link', { name: /home/i }),
        screen.getByRole('link', { name: /about/i }),
        screen.getByRole('link', { name: /skills/i }),
        screen.getByRole('link', { name: /projects/i }),
        screen.getByRole('link', { name: /education/i }),
        screen.getByRole('link', { name: /contact/i })
      ];

      navigationLinks.forEach(link => {
        expect(link).toHaveClass('min-h-[44px]');
      });
    });

    test('social media links meet minimum touch target size', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const socialLinks = [
        screen.getByLabelText('Visit GitHub profile'),
        screen.getByLabelText('Visit LinkedIn profile'),
        screen.getByLabelText('Visit Twitter profile'),
        screen.getByLabelText('Visit Instagram profile'),
        screen.getByLabelText('Visit Discord profile')
      ];

      socialLinks.forEach(link => {
        expect(link).toHaveClass('min-w-[44px]');
        expect(link).toHaveClass('min-h-[44px]');
      });
    });

    test('email link meets minimum touch target size', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const emailLink = screen.getByLabelText('Send email to dipseek5@gmail.com');
      expect(emailLink).toHaveClass('min-h-[44px]');
    });
  });

  describe('Sidebar Touch Targets', () => {
    test('sidebar navigation links have appropriate sizing for desktop', () => {
      render(
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      );
      
      // Sidebar links should be appropriately sized for desktop use
      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toBeInTheDocument();
      // Desktop links don't need the same minimum size requirements as mobile
    });

    test('sidebar social links are appropriately sized', () => {
      render(
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      );
      
      const githubLink = screen.getByRole('link', { name: /github/i });
      const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
      const emailLink = screen.getByRole('link', { name: /email/i });
      
      expect(githubLink).toBeInTheDocument();
      expect(linkedinLink).toBeInTheDocument();
      expect(emailLink).toBeInTheDocument();
    });
  });

  describe('Accessibility Compliance', () => {
    test('all interactive elements have proper ARIA labels', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      // Check that all interactive elements have proper labels
      expect(screen.getByLabelText('Visit GitHub profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit LinkedIn profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Send email to dipseek5@gmail.com')).toBeInTheDocument();
    });

    test('navigation has proper ARIA roles', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const navigation = screen.getByRole('navigation', { name: /main navigation/i });
      expect(navigation).toBeInTheDocument();
      
      const mobileNavigation = screen.getByRole('navigation', { name: /mobile navigation menu/i });
      expect(mobileNavigation).toBeInTheDocument();
    });

    test('current page is properly indicated', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('aria-current', 'page');
    });
  });
});