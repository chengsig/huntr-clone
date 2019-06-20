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
                <Droppable id='applied' 
                           style={droppableStyle}
                           addJob={this.props.addJob} 
                           deleteJob={this.props.deleteJob}
                           >
                    applied
                    {this.props.applied.map(j => (
                        <Draggable id={j.id} 
                                   jobData={j}
                                   style={draggableStyle}
                                   parentId="applied"
                                   >
                            <JobCard id={j.id}
                                     company={j.company}
                                     position={j.position}
                                     url={j.url}
                                     date={j.date}
                                     notes={j.notes}
                                     deleteJob={this.props.deleteJob}
                                     type='applied'
                            />
                        </Draggable>
                    ))}
                </Droppable>
                <Droppable id='phoneScreen' 
                           style={droppableStyle}
                           addJob={this.props.addJob}
                           deleteJob={this.props.deleteJob} 
                           >
                    phones screen
                    {this.props.phoneScreen.map(j => (
                        <Draggable id={j.id} 
                                   jobData={j}
                                   style={draggableStyle}
                                   parentId="phoneScreen"
                                   >
                            <JobCard id={j.id}
                                     company={j.company}
                                     position={j.position}
                                     url={j.url}
                                     date={j.date}
                                     notes={j.notes}
                                     deleteJob={this.props.deleteJob}
                                     type='phoneScreen'
                            />
                        </Draggable>
                    ))}
                </Droppable>
                <Droppable id='techChallenge' 
                           style={droppableStyle}
                           addJob={this.props.addJob}
                           deleteJob={this.props.deleteJob} 
                           >
                    tech challenge
                    {this.props.techChallenge.map(j => (
                        <Draggable id={j.id} 
                                   jobData={j}
                                   style={draggableStyle}
                                   parentId="techChallenge"
                                   >
                            <JobCard id={j.id}
                                     company={j.company}
                                     position={j.position}
                                     url={j.url}
                                     date={j.date}
                                     notes={j.notes}
                                     deleteJob={this.props.deleteJob}
                                     type='techChallenge'
                            />
                        </Draggable>
                    ))}
                </Droppable>
                <Droppable id='onSite' 
                           style={droppableStyle}
                           addJob={this.props.addJob}
                           deleteJob={this.props.deleteJob} 
                           >
                    on-site
                    {this.props.onSite.map(j => (
                        <Draggable id={j.id} 
                                   jobData={j}
                                   style={draggableStyle}
                                   parentId="onSite"
                                   >
                            <JobCard id={j.id}
                                     company={j.company}
                                     position={j.position}
                                     url={j.url}
                                     date={j.date}
                                     notes={j.notes}
                                     deleteJob={this.props.deleteJob}
                                     type='onSite'
                            />
                        </Draggable>
                    ))}
                </Droppable>
                <Droppable id='offer' 
                           style={droppableStyle}
                           addJob={this.props.addJob}
                           deleteJob={this.props.deleteJob} 
                           >
                    offer
                    {this.props.offer.map(j => (
                        <Draggable id={j.id} 
                                   jobData={j}
                                   style={draggableStyle}
                                   parentId="offer"
                                   >
                            <JobCard id={j.id}
                                     company={j.company}
                                     position={j.position}
                                     url={j.url}
                                     date={j.date}
                                     notes={j.notes}
                                     deleteJob={this.props.deleteJob}
                                     type='offer'
                            />
                        </Draggable>
                    ))}
                </Droppable>
                <Droppable id='rejection' 
                           style={droppableStyle}
                           addJob={this.props.addJob} 
                           deleteJob={this.props.deleteJob}
                           >
                    rejection
                    {this.props.rejection.map(j => (
                        <Draggable id={j.id} 
                                   jobData={j}
                                   style={draggableStyle}
                                   parentId="rejection"
                                   >
                            <JobCard id={j.id}
                                     company={j.company}
                                     position={j.position}
                                     url={j.url}
                                     date={j.date}
                                     notes={j.notes}
                                     deleteJob={this.props.deleteJob}
                                     type='rejection'
                            />
                        </Draggable>
                    ))}
                </Droppable>
            </Wrapper>
        )
    }
}

