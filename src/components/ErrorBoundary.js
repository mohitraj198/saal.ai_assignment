import React from 'react';

export default class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return (
                <div>Something Went Wrong...</div>
            );
        }
        const { children } = this.props;
        return children;
    }
}
