import React from 'react';
import styled from 'styled-components';
import Popup from "reactjs-popup";
import AddJobForm from './AddJobForm';

var rand = Math.floor(Math.random() * 10);
    var colorQ = "rgb(" + (215 - rand * 3) + 
                 "," + (185 - rand * 5) + 
                 "," + (185 - rand * 10) + 
                 " )";

const Job = styled.div`
    width: 100%;
    padding: 8px;
    color: #555;
    border-radius: 3px;
    backgroundColor: ${colorQ};
`;

const contentStyle = {
    maxWidth: "600px",
    width: "90%"
};

export default function JobCard(props) {
    return(
        <Popup trigger={
            <Job id={props.id}>
                {props.company} <br/>
                {props.position}
            </Job>
        }
                  modal
                  contentStyle={contentStyle}>
            <AddJobForm isAdding={false} 
                        company={props.company}
                        position={props.position}
                        url={props.url}
                        date={props.date}
                        notes={props.notes}
                        />
        </Popup> 
    )
}



