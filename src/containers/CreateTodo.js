import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionCreator';
import { bindActionCreators } from 'redux';
import { FormErrors } from '../components/FormErrors';

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
            formValid: false,
            todotextValid: false,
            formErrors: {todotext: ''}
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let todotextValid = this.state.todotextValid;
        
        switch(fieldName) {
            case 'todotext':
            todotextValid = value.length >= 6;
            fieldValidationErrors.password = todotextValid ? '': ' is too short';
            break;
            default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        todotextValid: todotextValid
                        }, this.validateForm);
    }
    
    validateForm() {
        this.setState({formValid: this.state.todotextValid});
    }

    onChangeTodoText(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    handleValidation(e) {
        console.log(e.target.text)
    }

    render(){
        return (
                <div>
                    <form className="addToDoForm">
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <input 
                                    name="todotext" 
                                    onChange={this.onChangeTodoText} 
                                    value={this.state.todotext} 
                                    type="text" 
                                    className="form-control" 
                                    id="inputEmail3" 
                                    placeholder="add todo here"
                                    autocomplete="off" />
                                
                                <button 
                                    type="button" 
                                    onClick={ () => this.setState({ todotext: '' }) } 
                                    style={{marginTop: "25px", marginRight: "15px"}} 
                                    className="btn btn-danger">
                                    Cancel
                                </button>

                                <button 
                                    type="button" 
                                    disabled={!this.state.formValid} 
                                    onClick={() =>{ this.props.addTodo(this.state.todotext);  this.setState({ todotext: '' }) } } 
                                    style={{marginTop: "25px"}} 
                                    className="btn btn-success">
                                    Add Todo
                                </button>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                    </form>
                </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateTodo)