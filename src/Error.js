import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops!Error loading page.</h1>
        }
        return (this.props.children);
    }
}

export default ErrorBoundary;