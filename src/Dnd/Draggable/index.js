import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Draggable extends Component {

    drag = (e, jobData, parentId) => {
        
        let jData = JSON.stringify({jobData})
        console.log('what does jobData look like', jData)
        console.log('trying to parse', JSON.parse(jData).jobData.id)
        console.log('can I get where I start', parentId)
        e.dataTransfer.setData('transfer', jData);
    }

    noAllowDrop = (e) => {
        e.stopPropagation();
    }

    render () {
        return (
            <div id={this.props.id} 
                 draggable="true" 
                 onDragStart={e => this.drag(e, this.props.jobData, this.props.parentId)} 
                 onDragOver={this.noAllowDrop} 
                 style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}