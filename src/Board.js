import React, { Component } from 'react';
import styled from 'styled-components';
import Job from './JobCard';
import Draggable from './Dnd/Draggable';
import Droppable from './Dnd/Droppable';

const Wrapper = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: center;
`;

const Item = styled.div`
    padding: 8px;
    color: #555;
    backgroundColor: white;
    border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#555',
    color: 'white',
    width: '250px',
    height: '400px',
    margin: '32px',
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
                <Droppable id='dr1' style = {droppableStyle}>
                    applied
                  <Draggable id='item1' style={draggableStyle}>
                    <Job/>
                  </Draggable>
                <Draggable id='item2' style={draggableStyle}>
                    <Item>job2</Item>
                </Draggable>
                <Draggable id='item3' style={draggableStyle}>
                  <Job/>
                </Draggable>
                <Draggable id='item4' style={draggableStyle}>
                  <Job/>
                </Draggable>
                <Draggable id='item5' style={draggableStyle}>
                  <Job/>
                </Draggable>
                </Droppable>
                <Droppable id='dr2' style={droppableStyle}>
                    interviewing
                </Droppable>
                <Droppable id='dr2' style={droppableStyle}>
                    offer
                </Droppable>
                <Droppable id='dr2' style={droppableStyle}>
                    rejection
                </Droppable>
            </Wrapper>
        )
    }
}
