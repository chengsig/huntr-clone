import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 2px;
  color: #555;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid lightgrey;
`;

const StyledTextArea = styled.textarea`
  height: 100px;
  width: 98%;
  margin: 2px;
  border: 1px solid lightgrey;
`;

const initialState = {
  company: '',
  position: '',
  description: '',
  url: '',
  date: '',
}

class AddJobForm extends Component{
  constructor(props){
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.triggerAddJob('', this.state);
    this.setState(initialState);
  }

  render(){
    return(
      <StyledForm onSubmit={this.handleSubmit}>
        <label htmlFor="company">Company:</label><br/>
        <StyledInput id="company" onChange={this.handleChange} value={this.state.company} name="company" /><br/>
        <label htmlFor="position">Position:</label><br/>
        <StyledInput id="position" onChange={this.handleChange} value={this.state.position} name="position" /><br/>
        <label htmlFor="url">Url:</label><br/>
        <StyledInput id="url" onChange={this.handleChange} value={this.state.url} name="url" /><br/>
        <label htmlFor="date">Date applied:</label><br/>
        <StyledInput id="date" onChange={this.handleChange} value={this.state.date} name="date" /><br/>
        <label htmlFor="description">Description:</label><br/>
        <StyledTextArea id="description" onChange={this.handleChange} value={this.state.description} name="description" /><br/>
        <button>Add</button>
      </StyledForm>
    )}
}

export default AddJobForm;