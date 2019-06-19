import React, { Component } from 'react';
import styled from 'styled-components';
import JobCard from './JobCard';
import Draggable from './Dnd/Draggable';
import Droppable from './Dnd/Droppable';

const Wrapper = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: center;
`;

// const Item = styled.div`
//     padding: 8px;
//     color: #555;
//     backgroundColor: white;
//     border-radius: 3px;
// `;

const droppableStyle = {
    backgroundColor: '#555',
    color: 'white',
    width: '350px',
    height: '400px',
    margin: '10px',
};

var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (85 + 10 * Math.random()) + '%)';

const draggableStyle = {
    backgroundColor: cssHSL,
    margin: '8px',
};

export default class Board extends Component {
    
    render() {
        
        return (
            <Wrapper>
                <Droppable id='applied' style = {droppableStyle}>
                    applied
                    {this.props.applied.map(j => (
                        <Draggable id={j.id} style={draggableStyle}>
                            <JobCard id={j.id}
                                     company={j.company}
                                     position={j.position}
                                     url={j.url}
                                     date={j.date}
                                     notes={j.notes}
                            />
                        </Draggable>
                    ))}
                </Droppable>
                <Droppable id='phoneScreen' style={droppableStyle}>
                    phones screen
                </Droppable>
                <Droppable id='techChallenge' style={droppableStyle}>
                    tech challenge
                </Droppable>
                <Droppable id='onSite' style={droppableStyle}>
                    on-site
                </Droppable>
                <Droppable id='offer' style={droppableStyle}>
                    offer
                </Droppable>
                <Droppable id='rejection' style={droppableStyle}>
                    rejection
                </Droppable>
            </Wrapper>
        )
    }
}

