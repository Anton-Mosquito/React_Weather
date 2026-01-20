import React, { type ReactNode, type ErrorInfo, Suspense } from 'react';
import ErrorPage from '@/components/layouts';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense>
          <div style={{ padding: 20 }}>
            <h1>Something went wrong.</h1>
            <p>{this.state.error?.toString()}</p>
            <ErrorPage />
          </div>
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
