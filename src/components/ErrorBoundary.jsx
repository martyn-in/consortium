import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Consortium ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#05070f',
          color: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00e5ff' }}>
            Consortium 2026
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '500px', marginBottom: '2rem' }}>
            Something went wrong while loading this view. Please reload to restore the festival experience.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.8rem 1.8rem',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(135deg, #00e5ff 0%, #38bdf8 100%)',
              color: '#05070f',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Reload Website
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
