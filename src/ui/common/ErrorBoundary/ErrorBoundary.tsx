import React, {Component, PropsWithChildren} from 'react';

interface ErrorBoundaryProps {}
interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {error: null};
  }

  static getDerivedStateFromError(error: Error) {
    return error;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({error: error});
    console.log(error);
  }

  render() {
    if (this.state.error) {
      return 'Error';
    }

    return this.props.children;
  }
}
