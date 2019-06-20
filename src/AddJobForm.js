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
    url: '',
    date: '',
    notes: '',
}

class AddJobForm extends Component{
  constructor(props){
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let type = "applied";
    this.props.triggerAddJob(type, this.state, true);
    this.setState(initialState);
  }

  handleDelete(e) {
    
    e.preventDefault();
    this.props.deleteJob(this.props.type, this.props.jobId, true);
  }

  render(){
      let button = this.props.isAdding ? "Add" : "Save";
      let deleteBtn = this.props.isAdding ? "" : <button id="deletebutton" onClick={this.handleDelete}>delete</button> ;
      let cPlaceholder = this.props.isAdding ? "" : this.props.company;
      let pPlaceholder = this.props.isAdding ? "" : this.props.position;
      let uPlaceholder = this.props.isAdding ? "" : this.props.url;
      let urlLink = this.props.isAdding ? "Url:" : (
            <a href={this.props.url} target="_blank" rel="noopener noreferrer" >Url:</a>);
      let dPlaceholder = this.props.isAdding ? new Date() : this.props.date;
      let nPlaceholder = this.props.isAdding ? "" : this.props.notes;

    return(
        <StyledForm id="styledForm">
            <label htmlFor="company">Company:</label><br/>
            <StyledInput id="company" 
                         onChange={this.handleChange} 
                         value={this.state.company} 
                         name="company"
                         placeholder={cPlaceholder} /><br/>
            <label htmlFor="position">Position:</label><br/>
            <StyledInput id="position" 
                         onChange={this.handleChange} 
                         value={this.state.position} 
                         name="position"
                         placeholder={pPlaceholder} /><br/>
            <label htmlFor="url">{urlLink}</label><br/>
            <StyledInput id="url" 
                         onChange={this.handleChange} 
                         value={this.state.url} 
                         name="url"
                         placeholder={uPlaceholder} /><br/>
            <label htmlFor="date">Date applied:</label><br/>
            <StyledInput id="date" 
                         onChange={this.handleChange} 
                         value={this.state.date} 
                         name="date"
                         placeholder={dPlaceholder} /><br/>
            <label htmlFor="notes">Notes:</label><br/>
            <StyledTextArea id="notes" 
                            onChange={this.handleChange} 
                            value={this.state.notes} 
                            name="notes"
                            placeholder={nPlaceholder} /><br/>
            <button id="addOrSave"
                    onClick={this.handleSubmit}>{button}</button>
            {deleteBtn}
        </StyledForm>
    )}
}

export default AddJobForm;