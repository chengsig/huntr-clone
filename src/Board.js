import React from 'react';
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

export default function Board (props) {
    return (
        <Wrapper>
            {Object.keys(props.boardProps).map(key => (
                <Droppable id={key}
                    style={droppableStyle}
                    addJob={props.addJob}
                    deleteJob={props.deleteJob}
                >
                    {key}: {props.boardProps[key].length}
                    {props.boardProps[key].map(j => (
                        <Draggable id={j.id}
                            jobData={j}
                            style={draggableStyle}
                            parentId={key}
                        >
                            <JobCard id={j.id}
                                company={j.company}
                                position={j.position}
                                url={j.url}
                                date={j.date}
                                notes={j.notes}
                                deleteJob={props.deleteJob}
                                type={key}
                            />
                        </Draggable>
                    ))}
                </Droppable>
            ))}
        </Wrapper>
    )
    
}

