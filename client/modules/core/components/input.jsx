import React from 'react';


class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    onChange(e){
    	this.props.onChange(e.target.value)
    }
    render() {
        return (<input {...this.props} onChange={this.onChange.bind(this)}/>);
    }
}

export default Input;
