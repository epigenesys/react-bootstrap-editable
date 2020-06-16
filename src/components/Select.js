import React from 'react';
import TextField from './TextField';

export default class Select extends TextField {
    constructor(props){
        super(props)
        const options = this.props.options.map((value, index) => {
            return <option key={index + value}>{value}</option>
        })
        this.state = {
            componentClass: 'select',
            type: null,
            options: options
        }
    }
}
