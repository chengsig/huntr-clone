import React, { Component } from 'react';
import styled from 'styled-components';
import Popup from "reactjs-popup";
import Draggable from './Dnd/Draggable';
import Droppable from './Dnd/Droppable';
import AddJobForm from './AddJobForm';
import Job from './JobCard';

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

const droppableStyle = {
    backgroundColor: '#555',
    color: 'white',
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
            <div>
                <Popup trigger={<Button>Add Job</Button>}
                       modal
                       contentStyle={contentStyle}>
                           <AddJobForm/>
                </Popup>
                
                <Wrapper>
                    
                    <Droppable id='dr1' style = {droppableStyle}>
                        applied
                        <Draggable id='item1' style={draggableStyle}>
                            <Job/>
                        </Draggable>
                        <Draggable id='item2' style={draggableStyle}>
                            <Item>job2</Item>
                        </Draggable>
                    </Droppable>
                    <Droppable id='dr2' style={droppableStyle}>
                        interviewing

                    </Droppable>
                    <Droppable id='dr2' style={droppableStyle}>
                        offer

                    </Droppable>
                    <Droppable id='dr2' style={droppableStyle}>
                        reject

                    </Droppable>
                </Wrapper>
            </div>
        )
    }
}
