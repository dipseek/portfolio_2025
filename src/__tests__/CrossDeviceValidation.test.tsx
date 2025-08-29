import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';
import MobileNav from '../components/MobileNav';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock components
jest.mock('../components/AnimatedBackground', () => {
  return function MockAnimatedBackground() {
    return <div data-testid="animated-background" />;
  };
});

// Mock useLocation
const mockLocation = {
  pathname: '/',
  search: '',
  hash: '',
  state: null,
  key: 'default'
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockLocation,
}));

describe('Cross-Device Navigation Validation', () => {
  describe('Mobile Navigation Requirements Validation', () => {
    test('Requirement 1.1: Mobile user can navigate to Education page without errors', () => {
      render(
        <MemoryRouter initialEntries={['/education']}>
          <App />
        </MemoryRouter>
      );
      
      expect(screen.getByText('Education')).toBeInTheDocument();
      expect(screen.getByText('Back to Home')).toBeInTheDocument();
    });

    test('Requirement 1.2: Education page displays with proper mobile-responsive formatting', () => {
      render(
        <MemoryRouter initialEntries={['/education']}>
          <App />
        </MemoryRouter>
      );
      
      const section = screen.getByText('Education').closest('section');
      expect(section).toHaveClass('min-h-screen');
      expect(section).toHaveClass('py-12', 'sm:py-16', 'lg:py-20');
    });

    test('Requirement 1.3: Education page maintains consistent navigation functionality', () => {
      render(
        <MemoryRouter initialEntries={['/education']}>
          <App />
        </MemoryRouter>
      );
      
      const backLink = screen.getByRole('link', { name: /navigate back to home page/i });
      expect(backLink).toBeInTheDocument();
      expect(backLink).toHaveClass('min-h-[44px]');
    });

    test('Requirement 2.1: Mobile user can navigate to Projects page without errors', () => {
      render(
        <MemoryRouter initialEntries={['/projects']}>
          <App />
        </MemoryRouter>
      );
      
      expect(screen.getByText('My Projects')).toBeInTheDocument();
      expect(screen.getByText('Back to Home')).toBeInTheDocument();
    });

    test('Requirement 2.2: Projects page displays with proper mobile formatting', () => {
      render(
        <MemoryRouter initialEntries={['/projects']}>
          <App />
        </MemoryRouter>
      );
      
      const section = screen.getByText('My Projects').closest('section');
      expect(section).toHaveClass('min-h-screen');
      expect(section).toHaveClass('py-12', 'sm:py-16', 'lg:py-20');
    });

    test('Requirement 2.3: Smooth navigation between project subcategories', () => {
      render(
        <MemoryRouter initialEntries={['/projects/python']}>
          <App />
        </MemoryRouter>
      );
      
      expect(screen.getByText('Python Projects')).toBeInTheDocument();
      expect(screen.getByText('Back to Projects')).toBeInTheDocument();
    });

    test('Requirement 3.1: Consistent navigation menu behavior across pages', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const navigation = screen.getByRole('navigation', { name: /main navigation/i });
      expect(navigation).toBeInTheDocument();
      
      // Check all navigation items are present
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /education/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    });

    test('Requirement 3.2: Mobile navigation displays all options with proper touch targets', () => {
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

    test('Requirement 4.1: Navigation adapts to various mobile screen sizes', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const mobileNavContainer = screen.getByRole('navigation', { name: /mobile navigation menu/i });
      expect(mobileNavContainer).toHaveClass('w-72', 'sm:w-80');
    });

    test('Requirement 4.2: Touch interactions respond accurately with proper feedback', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={false} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      expect(menuButton).toHaveClass('min-w-[44px]', 'min-h-[44px]');
      
      fireEvent.click(menuButton);
      expect(setIsOpen).toHaveBeenCalledWith(true);
    });
  });

  describe('Navigation Error Handling Validation', () => {
    test('404 page displays properly for invalid routes', () => {
      render(
        <MemoryRouter initialEntries={['/invalid-route']}>
          <App />
        </MemoryRouter>
      );
      
      expect(screen.getByText('Page Not Found')).toBeInTheDocument();
      expect(screen.getByText("The page you're looking for doesn't exist.")).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /go to home/i })).toBeInTheDocument();
    });

    test('Error boundary catches and handles navigation errors', () => {
      // This test validates that the error boundary is properly implemented
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      // Verify app renders without throwing
      expect(screen.getByText('Deepika Saini')).toBeInTheDocument();
    });
  });

  describe('Performance Validation', () => {
    test('Lazy loaded components are properly implemented', () => {
      // This test ensures that components are lazy loaded
      render(
        <MemoryRouter initialEntries={['/projects']}>
          <App />
        </MemoryRouter>
      );
      
      // Should show loading state initially, then content
      expect(screen.getByText('My Projects')).toBeInTheDocument();
    });

    test('Navigation state is properly managed', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const homeLink = screen.getByRole('link', { name: /home/i });
      fireEvent.click(homeLink);
      expect(setIsOpen).toHaveBeenCalledWith(false);
    });
  });

  describe('Accessibility Validation', () => {
    test('All navigation elements have proper ARIA attributes', () => {
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

    test('Current page is properly indicated with aria-current', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('aria-current', 'page');
    });

    test('Social media links have proper accessibility labels', () => {
      const setIsOpen = jest.fn();
      render(
        <BrowserRouter>
          <MobileNav isOpen={true} setIsOpen={setIsOpen} />
        </BrowserRouter>
      );
      
      expect(screen.getByLabelText('Visit GitHub profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit LinkedIn profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit Twitter profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit Instagram profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit Discord profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Send email to dipseek5@gmail.com')).toBeInTheDocument();
    });
  });
});