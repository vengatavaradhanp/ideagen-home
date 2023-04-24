import React from "react";
import ErrorPage from "./ErrorPage";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Custom error page
      return this.props.fallback
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
