import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Droppbale extends Component {

    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        let jobData = JSON.parse(data).jobData;
        let jobId = jobData.id;
        let oldParent = jobData.parentId;
        e.target.appendChild(document.getElementById(jobId));
        delete jobData.id;
        delete jobData.parentId;
        this.props.addJob(e.target.id, jobData);
        this.props.deleteJob(oldParent, jobId);
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <div id={this.props.id} 
                 onDrop={this.drop} 
                 onDragOver={this.allowDrop} 
                 style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

Droppbale.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}