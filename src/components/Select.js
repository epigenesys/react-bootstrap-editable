import React from 'react';
import TextField from './TextField';

export default class Select extends TextField {
    constructor(props){
        super(props)
        const options = this.props.options.map((option, index) => {
            const value = option.value;
            const label = option.label;
            return <option key={index + value} value={value}>{label}</option>
        });
        this.state = {
            componentClass: 'select',
            type: null,
            options: options
        }
    }
}
