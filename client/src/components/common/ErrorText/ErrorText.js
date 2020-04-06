import React from 'react';



function ErrorText(props) {
    const defaultErrorText = 'Hasło jest niezgodne';
    const errorText = props.error ? props.error : defaultErrorText;

    return (
    <span className="error active" aria-live="polite">{errorText}</span>
    )
}

export default ErrorText;