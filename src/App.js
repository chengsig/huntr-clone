import React, { Component } from 'react';
import styled from 'styled-components';
import Popup from "reactjs-popup";
import AddJobForm from './AddJobForm';
import Board from './Board';
import { fetchItems, addJob, deleteJob } from "./Api";
import uuid from 'uuid/v4';

const Button = styled.button`
    background: #e6fff7;
    border-radius: 5px;
    border: 2px solid #308d84;
    color: #308d84;
    margin: 8px;
    padding: 0.25em 1em;
`;

const contentStyle = {
    maxWidth: "600px",
    width: "90%"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      applied: [],
      phoneScreen: [],
      techChallenge: [],
      onSite: [],
      offer: [],
      rejection: [],
    };
    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }

  // load jobs from backend
  async componentDidMount() {
    let applied = await fetchItems("applied");
    let phoneScreen = await fetchItems("phoneScreen");
    let techChallenge = await fetchItems("techChallenge");
    let onSite = await fetchItems("onSite");
    let offer = await fetchItems("offer");
    let rejection = await fetchItems("rejection");
    this.setState({ applied, 
                    phoneScreen,
                    techChallenge,
                    onSite,
                    offer,
                    rejection,
                    isLoading: false });
  }

  // call API to add a new job to tbe board
  async addJob(type, { company, position, url, date, notes }) {
    let id = uuid();
    let objData = { id, company, position, url, date, notes };
    await addJob(type, objData);
    this.setState({
      [type]: [...this.state.applied, objData]
    });
  }

  // delete a job from API's corresponding column
  async deleteJob(type, id) {
    await deleteJob(type, id);
    this.setState(st => ({
      type: st.type.filter(job => job.id !== id)
    }));
  }

    render () {
        const {applied, phoneScreen, techChallenge, onSite, offer, rejection, isLoading} = this.state;
        let html = isLoading ? <div>...loading</div> : (
          <div>
            <Popup trigger={<Button>Add Job</Button>}
                  modal
                  contentStyle={contentStyle}>
              <AddJobForm triggerAddJob={this.addJob} isAdding={true} />
            </Popup>
            <Board id="jobBoard"
                   applied={applied}
                   phoneScreen={phoneScreen}
                   techChallenge={techChallenge}
                   onSite={onSite}
                   offer={offer}
                   rejection={rejection}
                   addJob={this.addJob}
                   deleteJob={this.deleteJob}
            />
          </div>
        )

        return html;
    }
}
