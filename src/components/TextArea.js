import TextField from "./TextField";

export default class TextArea extends TextField {
    constructor(props){
        super(props)
        this.state = { componentClass: 'textarea', type: null }
    }
}
