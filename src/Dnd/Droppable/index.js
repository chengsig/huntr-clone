import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Droppbale extends Component {

    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        let jobData = JSON.parse(data).jobData;
        console.log('can I get id this way', JSON.parse(data).jobData) //data object
        console.log('and can get parent', e.target.id) //"phoneScreen"
        e.target.appendChild(document.getElementById(jobData.id));
        delete jobData.id;
        this.props.addJob(e.target.id, jobData);

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