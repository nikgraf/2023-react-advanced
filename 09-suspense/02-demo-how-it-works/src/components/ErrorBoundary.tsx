import React from "react";

type Props = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

const initialState = { error: null, info: null };

class ErrorBoundary extends React.Component<Props> {
  state = initialState;

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error !== null) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
