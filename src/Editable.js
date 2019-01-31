import React from "react"
import PropTypes from "prop-types";
import TextField from "./components/TextField";
import Select from "./components/Select";
import {Button, Form} from "reactstrap";

export default class Editable extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            value: this.props.value,
            newValue: this.props.value,
            isEditing: false,
            validationText: null,
            isLoading: false,
        }
    }
    getEditingComponent(){
        let controls = (
            <React.Fragment>
                <Button className="mx-1" color="success" size="sm" onClick={() => this.onSubmit()}>
                    <i className="fa fa-check fa-fw"/>
                </Button>
                <Button color="danger" size="sm" onClick={() => this.onCancel()}>
                    <i className="fa fa-times fa-fw"/>
                </Button>
            </React.Fragment>
        )
        if(this.state.isLoading){
            controls = (<p className="my-0">Loading...</p>)
        }
        switch(this.props.type){
            case "textfield":
                return <TextField value={this.state.newValue} controls={controls}
                                  setNewValue={(newValue) => this.setState({newValue: newValue})}
                                  onSubmit={newValue => this.onSubmit(newValue)}
                                  onCancel={() => this.onCancel()}
                                  validationText={this.state.validationText}/>
            case "select":
                return <Select value={this.state.newValue} controls={controls} options={this.props.options}
                                  setNewValue={(newValue) => this.setState({newValue: newValue})}
                                  onSubmit={newValue => this.onSubmit(newValue)}
                                  onCancel={() => this.onCancel()}/>
            case "textarea":
                return null
            case "date":
                return null
            default:
                console.error(`"Editable: "${this.props.type}" is not a valid value for the type prop`)
                return null
        }
    }
    onCancel(){
        //reset validation text AND new value, all back to initial
        this.setState({validationText: null, newValue:this.state.value, isEditing: false})
    }
    //validation happens here
    onSubmit(){
        const validationText = this.props.validate? this.props.validate(this.state.newValue) : null

        //we always trigger this, as long as the prop is specified
        this.props.onSubmit? this.props.onSubmit(this.state.newValue) : null

        if(validationText){
            this.setState({validationText: validationText})
        }else{
            this.props.validate? this.onValidated(this.state.newValue) : this.setState({value: this.state.newValue, isEditing: false})
        }
    }
    onValidated(validValue){
        this.props.onValidated? this.props.onValidated(validValue):
            console.warn("Editable: Specified a validate function without onValidated, possible error")
        if(this.props.ajax && validValue !== this.state.value){
            this.ajax(validValue)
        }else{
            this.setState({value: validValue, isEditing: false, validationText: null})
        }
    }
    ajax(validValue){
        this.setState({isLoading: true})
        let xhr = new XMLHttpRequest()
        //this will call the user's ajax function, allowing him to set up the object however he wants
        this.props.ajax(xhr, validValue)
        //consume the user's on ready state change function to call it later before the editable's
        let onReadyStateChange = xhr.onreadystatechange? xhr.onreadystatechange : null
        xhr.onreadystatechange = () => {
            onReadyStateChange? onReadyStateChange() : null
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    this.setState({isLoading: false, isEditing: false, value: validValue, validationText: null})
                }else{
                    this.setState({isLoading: false, validationText: `Ajax Response ${xhr.status} Error`})
                }
            }
        }
    }
    render(){
        const value = this.state.value? this.state.value: "No value"

        if(this.state.isEditing){
            return(this.getEditingComponent())
        }else{
            return(
                <Form inline>
                    {!this.props.isValueClickable && <h6 className="my-0 mr-1">{value}</h6>}
                    <a href="javascript:;" onClick={() => {this.setState({isEditing: true})}}>
                        {this.props.isValueClickable? value : this.props.editText}
                    </a>
                </Form>
            )
        }
    }
}
Editable.defaultProps = {
    type: null,
    mode: "popup",
    value: null,
    disabled: false,
    isValueClickable: false,
    editText: "Edit",
    validate: null,
    ajax: null,
    onSubmit: null,
    onValidated: null,
    //select props
    options: null
}
Editable.propTypes = {
    type: PropTypes.oneOf(["textfield", "textarea", "select", "date"]).isRequired,
    mode: PropTypes.oneOf(["inline", "popup"]).isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    isValueClickable: PropTypes.bool,
    editText: PropTypes.string,
    validate: PropTypes.func,
    ajax: PropTypes.func,
    onSubmit: PropTypes.func,
    onValidated: PropTypes.func,
    //select props
    options: PropTypes.array,
}
