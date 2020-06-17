import React from "react"
import { FormGroup, FormControl, HelpBlock } from "react-bootstrap";

export default class TextField extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }
    render(){
        return (
            <React.Fragment>
                <FormGroup validationState={this.props.validationText ? 'error' : null} >
                    <FormControl
                        autoFocus
                        value={this.props.value ? this.props.value : ""}
                        onChange={e => this.props.setNewValue(e.target.value)}
                        componentClass={this.state.componentClass}
                        type={this.state.type}
                        bsSize="sm" className="mr-1"
                    >
                        {this.state.options}
                    </FormControl>
                    <FormControl.Feedback />
                    <HelpBlock>{this.props.validationText}</HelpBlock>
                </FormGroup>
                {this.props.controls}
            </React.Fragment>
        )
    }
}
