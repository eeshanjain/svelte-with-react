import React from 'react';

export default class ToggleButton extends React.Component {
    render() {
        const msg = 'Toggle Name - ' + this.props.name;
        return React.createElement('button', { onClick: this.props.onClick }, msg);
        /* The following has been commented as JSX Tags are not currently supported. */
        /* A workaround is needed for this. */
        // return (
        //     <button onClick={this.props.onClick}>{msg}</button>
        // )
    }
}