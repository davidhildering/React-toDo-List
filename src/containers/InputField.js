import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

const ShowToDoTyping = styled.div`
    background: white;
    box-shadow: 10px 9px 41px 16px rgba(0,0,0,0.42);
    margin-bottom: 24px;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    font-weight: 600;
    height: auto;
    max-width: 300px;
    white-space: pre-line;
    border-radius: 4px;
`;

const TextField = styled.div`
    padding: 12px;
`;

const ToDoForm = styled.form`
    margin-bottom: 24px;
    margin-top: 10%;
`

class InputField extends React.Component {

    state = {
        value: '',
        id: 1
    };

    handleChange = event => {
        this.setState({
            value: event.target.value
        })

    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addToDo({
            text:this.state.value,
            completed: false,
            id: this.state.id });
        this.setState({
            value: '',
            id: this.state.id + 1
        })
    };


    render() {
        return (
            <React.Fragment>
          <ToDoForm onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <button type="submit">Submit</button>
          </ToDoForm>
                {this.state.value && (
                <ShowToDoTyping>
                <TextField>
                    {this.state.value}
                </TextField>
                </ShowToDoTyping>
                )}
            </React.Fragment>
        );
    }
}

export default connect(null, { addToDo })(InputField);