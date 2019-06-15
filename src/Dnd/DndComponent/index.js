import React, { Component } from 'react';
import styled from 'styled-components';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

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
    width: '250px',
    height: '400px',
    margin: '32px',
};

const draggableStyle = {
    backgroundColor: 'white',
    margin: '8px',
};

export default class DndComponent extends Component {
    render () {
        return (
            <Wrapper>
                <Droppable id='dr1' style = {droppableStyle}>
                    <Draggable id='item1' style={draggableStyle}>
                        <Item>job1</Item>
                    </Draggable>
                    <Draggable id='item2' style={draggableStyle}>
                        <Item>job2</Item>
                    </Draggable>
                </Droppable>
                <Droppable id='dr2' style={droppableStyle}>

                </Droppable>
            </Wrapper>
        )
    }
}