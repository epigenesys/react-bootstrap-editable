import React from "react"
import { FormControl } from "react-bootstrap";

export default class TextField extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <React.Fragment>
                <FormControl autoFocus
                       value={this.props.value? this.props.value : ""}
                       onChange={e => this.props.setNewValue(e.target.value)}
                       type="text" bsSize="sm" className="mr-1"/>
                {this.props.controls}
            </React.Fragment>
        )
    }
}
