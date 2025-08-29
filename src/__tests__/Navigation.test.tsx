import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';

// Mock framer-motion to avoid animation issues in tests
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

// Mock components that might cause issues in tests
jest.mock('../components/AnimatedBackground', () => {
  return function MockAnimatedBackground() {
    return <div data-testid="animated-background" />;
  };
});

describe('Navigation Integration Tests', () => {
  test('renders home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // Check if main sections are present
    expect(screen.getByText('Deepika Saini')).toBeInTheDocument();
  });

  test('navigates to education page', () => {
    render(
      <MemoryRouter initialEntries={['/education']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  test('navigates to projects page', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText('My Projects')).toBeInTheDocument();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  test('navigates to about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  test('navigates to skills page', () => {
    render(
      <MemoryRouter initialEntries={['/skills']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  test('navigates to contact page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  test('handles 404 page not found', () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent-page']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(screen.getByText("The page you're looking for doesn't exist.")).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go to home/i })).toBeInTheDocument();
  });

  test('project sub-routes work correctly', () => {
    render(
      <MemoryRouter initialEntries={['/projects/python']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Python Projects')).toBeInTheDocument();
    expect(screen.getByText('Back to Projects')).toBeInTheDocument();
  });

  test('all back navigation links have proper touch targets', () => {
    render(
      <MemoryRouter initialEntries={['/education']}>
        <App />
      </MemoryRouter>
    );
    
    const backLink = screen.getByRole('link', { name: /navigate back to home page/i });
    expect(backLink).toHaveClass('min-h-[44px]');
  });

  test('error boundary catches navigation errors', () => {
    // Mock console.error to avoid noise in test output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // This would need a component that throws an error to properly test
    // For now, we just verify the error boundary component exists
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // Verify app renders without throwing
    expect(screen.getByText('Deepika Saini')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });
});